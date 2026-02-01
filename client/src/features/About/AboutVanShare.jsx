function AboutVanShare() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-yellow-700">
            About Van Share
          </h2>
          <p className="text-lg text-stone-800 leading-relaxed">
            Van Share Spółka z o.o. is the official distributor of WOODEN WEST
            brand premium hardwood charcoal in Poland. We provide high-quality
            charcoal for grilling and BBQ, compliant with European standard EN
            1860-2:2005. Our mission is to deliver reliable energy solutions
            with transparency, efficiency, and trust in every transaction.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
            alt="Coal delivery truck"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutVanShare;
