function OurTeam() {
  return (
    <section className="bg-stone-800/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
              alt="Warehouse storage"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-yellow-700">
              Our Team
            </h2>
            <p className="text-lg text-stone-800 leading-relaxed">
              Our passionate team consists of energy experts, software
              engineers, and community advocates. We are united by a vision to
              empower people and businesses with reliable energy solutions. With
              years of experience in both the energy and tech sectors, we strive
              to deliver the best possible service to our users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
