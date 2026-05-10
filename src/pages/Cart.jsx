import React, { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Rose Elegance",
    brand: "Maison Luxe",
    price: 89.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Citrus Breeze",
    brand: "Essence Pure",
    price: 72.50,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f8f6f5] flex flex-col px-5 pt-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-center relative mb-8">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
        >
          <ArrowLeft size={20} className="text-[#2b1f1f]" />
        </button>
        <h1 className="text-lg font-bold text-[#2b1f1f]">Shopping Cart</h1>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 flex-1">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 gap-4">
            <p className="text-[#b8aca5] text-base">Your cart is empty</p>
            <button
              onClick={() => navigate("/home")}
              className="h-12 px-8 rounded-full bg-[#d6a8ad] text-white font-bold text-sm"
            >
              Explore Perfumes
            </button>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#2b1f1f]">{item.name}</p>
                      <p className="text-xs text-[#b8aca5] mt-0.5">{item.brand}</p>
                      <p className="text-sm text-[#d6a2a7] font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.id)}>
                      <Trash2 size={18} className="text-[#d6a8ad]" />
                    </button>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-4 bg-[#f5efed] rounded-full px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-[#867975] font-bold text-lg w-6 h-6 flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-sm font-bold text-[#2b1f1f] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-[#867975] font-bold text-lg w-6 h-6 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-bold text-[#2b1f1f]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="mt-8">
          <div className="bg-white rounded-2xl px-5 py-5 shadow-sm space-y-3 mb-5">
            <div className="flex justify-between">
              <span className="text-sm text-[#867975]">Subtotal</span>
              <span className="text-sm text-[#2b1f1f] font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#867975]">Shipping</span>
              <span className="text-sm text-[#2b1f1f] font-semibold">
                ${shipping.toFixed(2)}
              </span>
            </div>
            <div className="h-px bg-[#f0e8e6]" />
            <div className="flex justify-between">
              <span className="text-base font-bold text-[#2b1f1f]">Total</span>
              <span className="text-base font-bold text-[#d6a2a7]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full h-14 rounded-full bg-[#d6a8ad] text-white font-bold text-base">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;