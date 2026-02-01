function OurAchievements() {
  return (
    <section className="bg-yellow-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-100">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-6xl font-bold text-white mb-2">2021</div>
            <p className="text-xl text-stone-100">Founded</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-6xl font-bold text-white mb-2">100%</div>
            <p className="text-xl text-stone-100">Honest weigth</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-6xl font-bold text-white mb-2">3 days</div>
            <p className="text-xl text-stone-100">Avarage delivert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
