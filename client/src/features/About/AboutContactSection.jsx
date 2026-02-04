function AboutContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h3 className="text-3xl font-bold mb-4 text-orange-500">Contact Us</h3>
      <p className="text-xl text-stone-300">
        Have questions or want to partner with us? Reach out at{" "}
        <a
          href="mailto:vanshare1@gmail.com"
          className="text-orange-600 underline hover:text-orange-700 transition-colors"
        >
          vanshare1@gmail.com
        </a>
      </p>
    </section>
  );
}

export default AboutContactSection;
