import Button from "../ui/Button";

function Order() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl text-nowrap text-orange-500 font-extrabold text-center m-5">
        Place your order!
      </h2>
      <p className="text-stone-200 text-center text-md">
        And we will contact with you.
      </p>

      <form className="text-stone-100 flex flex-col m-10  rounded-2xl justify-between items-center gap-5 px-5 py-6 bg-stone-900/50  mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="name">
            Your name
          </label>
          <input
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            type="text"
            id="name"
            placeholder="Enter your name..."
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="email">
            Email
          </label>
          <input
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500  transition-colors resize-none"
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number..."
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="numberOfBags">
            Number of bags
          </label>
          <input
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            type="text"
            id="numberOfBags"
            placeholder="Enter number of bags"
          />
        </div>

        <div className="flex flex-col items-start gap-1 w-full  mx-10 ">
          <label className="text-xs text-stone-300" htmlFor="comment">
            Comment <span>(optional)</span>
          </label>
          <textarea
            className="w-full h-32 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            name="comment"
            id="comment"
          ></textarea>
        </div>
      </form>

      <div className="text-center m-10">
        <Button type="primary">Submit order</Button>
      </div>
    </div>
  );
}

export default Order;
