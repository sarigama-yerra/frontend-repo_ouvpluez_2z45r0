import { ShoppingCart, Menu, Search, User } from "lucide-react";

export default function Navbar({ onCartClick, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="text-xl font-bold tracking-tight">
            ShopSwift
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center px-6 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search products"
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none ring-blue-500/20 focus:ring"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 md:inline-flex">
            <User className="mr-2 h-4 w-4" /> Account
          </button>
          <button
            onClick={onCartClick}
            className="relative inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
            {cartCount > 0 && (
              <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
