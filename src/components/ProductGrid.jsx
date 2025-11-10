import { useMemo } from "react";
import { Star } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518444082625-2f5d34d1f2d2?q=80&w=1200&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Minimal Smartwatch",
    price: 179.0,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Modern Lamp",
    price: 69.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 4,
    name: "Comfy Sneakers",
    price: 99.0,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    tag: "Popular",
  },
];

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-800">
          {product.tag}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="line-clamp-1 text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-base font-semibold">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-medium text-gray-600">{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-3 w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAddToCart }) {
  const products = useMemo(() => sampleProducts, []);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <p className="mt-1 text-sm text-gray-600">Hand-picked items we think you’ll love</p>
        </div>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View all
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
