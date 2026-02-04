function OurAchievements() {
  return (
    <section className="bg-stone-900/50 border rounded-3xl py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-100">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8  hover:outline hover:outline-amber-600 duration-300">
            <div className="text-6xl font-bold text-orange-500 mb-2">2021</div>
            <p className="text-xl text-stone-300">Founded</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:outline hover:outline-amber-600 duration-300">
            <div className="text-6xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-xl text-stone-300">Honest weight</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:outline hover:outline-amber-600 duration-300">
            <div className="text-6xl font-bold text-orange-500 mb-2">
              3 days
            </div>
            <p className="text-xl text-stone-300">Avarage delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
