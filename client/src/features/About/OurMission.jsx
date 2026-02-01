function OurMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">
        Our Mission
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className=" bg-[#f5e5cb] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">
            Sustainability
          </h3>
          <p className="text-stone-700">
            We are committed to environmental responsibility and work
            continuously to minimize the carbon footprint of our operations.
          </p>
        </div>
        <div className="bg-[#f5e5cb] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">
            Community
          </h3>
          <p className="text-stone-700">
            Our platform connects coal suppliers and borrowers, streamlining the
            lending process and supporting local economies.
          </p>
        </div>
        <div className="bg-[#f5e5cb] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">
            Innovation
          </h3>
          <p className="text-stone-700">
            We believe in a future where energy is shared, not wasted.
            Technology drives our mission forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
