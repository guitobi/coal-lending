import assert from "node:assert/strict";
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import handler from "serve-handler";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const server = http.createServer((req,res) => handler(req,res,{
  public: dist, rewrites:[{source:"**",destination:"/index.html"}],
}));
await new Promise(resolve => server.listen(0,"127.0.0.1",resolve));
const base = "http://127.0.0.1:"+server.address().port;
let browser;
try {
  browser = await puppeteer.launch({headless:true,args:["--no-sandbox","--disable-setuid-sandbox"]});
  const page = await browser.newPage();
  await page.setBypassServiceWorker(true);
  await page.setViewport({width:1280,height:900,deviceScaleFactor:1});
  await page.setRequestInterception(true);
  let pelletCapability = true;
  let resolveOrder;
  const orderSent = new Promise(resolve => { resolveOrder = resolve; });
  page.on("request",r => {
    if (r.url().includes("/api/capabilities")) {
      return r.respond({
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({
          products: pelletCapability ? ["charcoal", "pellet"] : ["charcoal"],
          pelletOrderVersion: pelletCapability ? 1 : 0,
        }),
      });
    }
    if (r.url().includes("/api/order/new")) {
      const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Content-Type": "application/json" };
      if (r.method() === "POST") {
        resolveOrder(JSON.parse(r.postData()));
        return r.respond({ status: 200, headers, body: JSON.stringify({ success: true }) });
      }
      return r.respond({ status: 204, headers });
    }
    return r.url().startsWith(base) ? r.continue() : r.abort();
  });
  await page.goto(base,{waitUntil:"networkidle0"});
  await page.evaluate(()=>localStorage.setItem("gdpr_consent",JSON.stringify({necessary:true,analytics:false,marketing:false})));
  await page.goto(base+"/pellet?lng=pl",{waitUntil:"networkidle0"});
  await page.waitForSelector("#quantityBags");
  const title = await page.$eval("h1",el=>el.textContent);
  assert.match(title,/Pellet sosnowy/);
  assert.equal(await page.$eval("#quantityBags",el=>el.value),"65");
  assert.ok((await page.evaluate(()=>document.body.innerText)).includes("409,50"));
  assert.equal((await page.goto(base+"/pellet/pellet-quality-document.pdf")).status(),200);
  const pdf=await readFile(path.join(dist,"pellet","pellet-quality-document.pdf"));
  assert.equal(pdf.subarray(0,4).toString(),"%PDF");
  await page.goto(base+"/pellet?lng=pl",{waitUntil:"networkidle0"});
  await page.waitForSelector("#quantityBags");
  if(process.argv.includes("--preview")){
    const desktop = await page.screenshot({type:"jpeg",quality:72,clip:{x:0,y:0,width:1280,height:900}});
    console.log("DESKTOP:"+Buffer.from(desktop).toString("base64"));
  }
  await page.click("#quantityBags");
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.type("2");
  await page.type("#name", "Jan Kowalski");
  await page.type("#email", "jan@example.com");
  await page.type("#phoneNumber", "+48731431849");
  await page.type("#city", "Wrocław");
  await page.$eval("#dataProcessingConsent", el => el.click());
  await page.click('form button[type="submit"]');
  const orderPayload = await Promise.race([
    orderSent,
    new Promise((_, reject) => setTimeout(() => reject(new Error("Pellet inquiry was not submitted")), 5000)),
  ]);
  assert.equal(orderPayload.productType, "pellet");
  assert.equal(orderPayload.quantityBags, 2);
  assert.equal(orderPayload.weightInKg, 30);
  pelletCapability = false;
  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector('[role="status"]');
  assert.equal(await page.$("#quantityBags"), null, "Legacy backend must not accept pellet inquiries");
  assert.match(await page.$eval('[role="status"]', el => el.textContent), /chwilowo niedostępne/);
  pelletCapability = true;
  await page.setViewport({width:390,height:844,deviceScaleFactor:1,isMobile:true});
  await page.reload({waitUntil:"networkidle0"});
  await page.waitForSelector("#quantityBags");
  const width = await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth}));
  assert.ok(width.scroll<=width.viewport+2,JSON.stringify(width));
  if(process.argv.includes("--preview")){
    const mobile=await page.screenshot({type:"jpeg",quality:65,clip:{x:0,y:0,width:390,height:844}});
    console.log("MOBILE:"+Buffer.from(mobile).toString("base64"));
  }
  console.error("Pellet smoke passed: title, pricing, PDF, order submission, old-backend protection and mobile layout.");
} finally {
  if(browser) await browser.close();
  await new Promise(resolve=>server.close(resolve));
}
