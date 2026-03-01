import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <section className="px-10 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-14">
              We Design Fast, Beautiful Websites
            </h1>
            <p className="mt-4 text-gray-600">
              A product-first company crafting responsive, accessible and high-performance
              frontend experiences. From landing pages to complex dashboards, we build UI
              that feels effortless and looks premium.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/about" className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Explore Services
              </a>
              <a href="/contact" className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:border-gray-400 transition">
                Get a Quote
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-300 p-4 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-900">Landing Pages</h3>
                <p className="mt-1 text-sm text-gray-600">Conversion-focused, brand-aligned.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-4 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-900">Dashboards</h3>
                <p className="mt-1 text-sm text-gray-600">Data-rich, clean and usable.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-4 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-900">Design Systems</h3>
                <p className="mt-1 text-sm text-gray-600">Consistent UI foundations.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full h-[440px] md:h-[540px] object-cover shadow-xl ring-1 ring-black/10"
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop"
              alt="Product intro"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
