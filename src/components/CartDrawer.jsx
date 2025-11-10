import { X, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, items = [], onRemove }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);

  return (
    <div className={`fixed inset-0 z-30 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="rounded-md p-2 text-gray-600 hover:bg-gray-100" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-200px)] flex-col divide-y overflow-y-auto">
          {items.length === 0 && (
            <div className="flex flex-1 items-center justify-center p-6 text-sm text-gray-500">
              Your cart is empty.
            </div>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-4">
              <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.qty || 1}</p>
                <p className="text-sm font-semibold">${(item.price * (item.qty || 1)).toFixed(2)}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="rounded p-2 text-gray-500 hover:bg-gray-100" aria-label="Remove">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <button className="mt-3 w-full rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
