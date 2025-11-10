export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-14 md:grid-cols-2 md:py-20 md:px-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            New
            <span className="hidden text-blue-500 md:inline">•</span>
            Summer collection just dropped
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Shop the latest styles, delivered fast
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            Discover curated apparel, gadgets, and home goods from brands you love. Free shipping over $50.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
              Shop now
            </a>
            <a href="#trending" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50">
              Explore deals
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
          <img
            src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop"
            alt="Lifestyle products"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
