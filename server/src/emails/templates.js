const SUPPORTED_LOCALES = new Set(["pl", "en"]);

export function getEmailLocale(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized.startsWith("pl") && SUPPORTED_LOCALES.has("pl")) return "pl";
  if (normalized.startsWith("en") && SUPPORTED_LOCALES.has("en")) return "en";
  return "en";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderOrderManagerEmail(locale, data) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phoneNumber = escapeHtml(data.phoneNumber);
  const city = escapeHtml(data.city);
  const weightInKg = Number(data.weightInKg || 0);
  const comment = escapeHtml(data.comment || "");

  if (locale === "pl") {
    return {
      subject: "Nowe zamówienie na węgiel drzewny",
      html: `
        <h2>Nowe zamówienie</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phoneNumber}</p>
        <p><strong>Miasto:</strong> ${city}</p>
        <p><strong>Waga zamówienia:</strong> ${weightInKg} kg</p>
        <p><strong>Szacunkowa cena:</strong> €${(weightInKg * 0.95).toFixed(2)}</p>
        ${comment ? `<p><strong>Uwagi:</strong> ${comment}</p>` : ""}
      `,
    };
  }

  return {
    subject: "New charcoal order",
    html: `
      <h2>New order</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone number:</strong> ${phoneNumber}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Order weight:</strong> ${weightInKg} kg</p>
      <p><strong>Estimated price:</strong> €${(weightInKg * 0.95).toFixed(2)}</p>
      ${comment ? `<p><strong>Comment:</strong> ${comment}</p>` : ""}
    `,
  };
}

export function renderOrderCustomerEmail(locale, data) {
  const name = escapeHtml(data.name);
  const weightInKg = Number(data.weightInKg || 0);
  const city = escapeHtml(data.city);

  if (locale === "pl") {
    return {
      subject: "Potwierdzenie otrzymania zamówienia",
      html: `
        <h2>Dziękujemy za zamówienie!</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Miasto:</strong> ${city}</p>
        <p><strong>Waga zamówienia:</strong> ${weightInKg} kg</p>
        <p><strong>Szacunkowa cena:</strong> €${(weightInKg * 0.95).toFixed(2)}</p>
        <h3>Nasz menedżer skontaktuje się z Tobą wkrótce.</h3>
        <p style="color: #666; font-size: 12px;">Cena bazowa: €0.95/kg | Dostawa: DAP Polkowice</p>
      `,
    };
  }

  return {
    subject: "Order confirmation received",
    html: `
      <h2>Thank you for your order!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Order weight:</strong> ${weightInKg} kg</p>
      <p><strong>Estimated price:</strong> €${(weightInKg * 0.95).toFixed(2)}</p>
      <h3>Our manager will contact you soon.</h3>
      <p style="color: #666; font-size: 12px;">Base price: €0.95/kg | Delivery: DAP Polkowice</p>
    `,
  };
}

export function renderProblemManagerEmail(locale, data) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject || "");
  const message = escapeHtml(data.message || "");

  if (locale === "pl") {
    return {
      subject: "Nowa wiadomość z formularza kontaktowego",
      html: `
        <h2>Nowa wiadomość kontaktowa</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Temat:</strong> ${subject}</p>
        <p><strong>Wiadomość:</strong> ${message}</p>
      `,
    };
  }

  return {
    subject: "New contact form message",
    html: `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };
}

export function renderProblemCustomerEmail(locale, data) {
  const name = escapeHtml(data.name);

  if (locale === "pl") {
    return {
      subject: "Potwierdzenie otrzymania wiadomości",
      html: `
        <h2>Dziękujemy za kontakt, ${name}!</h2>
        <p>Twoja wiadomość została otrzymana. Odpowiemy najszybciej jak to możliwe.</p>
      `,
    };
  }

  return {
    subject: "Message received confirmation",
    html: `
      <h2>Thank you for contacting us, ${name}!</h2>
      <p>Your message has been received. We will get back to you as soon as possible.</p>
    `,
  };
}
