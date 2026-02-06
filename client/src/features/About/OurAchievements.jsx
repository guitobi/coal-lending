function OurAchievements() {
  return (
    <section className="bg-stone-900/50 border rounded-3xl py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-100">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 flex flex-col justify-center align-center gap-1">
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              2021
            </div>
            <p className="text-lg md:text-xl text-stone-300 whitespace-nowrap">
              Founded
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300  flex flex-col justify-center align-center gap-1">
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              100%
            </div>
            <p className="text-lg md:text-xl text-stone-300 whitespace-nowrap">
              Honest weight
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 flex flex-col justify-center align-center gap-1">
            {/* Mobile & Desktop: В один рядок */}
            <div className="md:hidden lg:block text-5xl lg:text-6xl font-bold text-orange-500 mb-2">
              3 days
            </div>
            {/* Тільки на Tablet (md): Розбито на 2 рядки */}
            <div className="hidden md:flex lg:hidden flex-col items-center">
              <div className="text-5xl font-bold text-orange-500 mb-0">3</div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                days
              </div>
            </div>
            <p className="text-base md:text-xl text-stone-300 whitespace-nowrap">
              Average delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
