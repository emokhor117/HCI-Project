import React from "react";
import {
  Search,
  Home,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

const perfumes = [
  {
    id: 1,
    name: "Rose Elegance",
    brand: "Maison Luxe",
    category: "Floral",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Citrus Breeze",
    brand: "Essence Pure",
    category: "Citrus",
    price: "$72.50",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = ["Floral", "Citrus", "Woody", "Sweet"];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f5f4] pb-28">
      {/* Header */}
      <div className="px-4 sm:px-6 pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2b1f1f]">
            ScentWear
          </h1>

          <Search size={32} className="text-[#b8aca5]" />
        </div>

        {/* Search */}
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Search perfumes..."
            className="w-full h-14 sm:h-16 rounded-full bg-[#f3eeeb] px-6 text-base outline-none placeholder:text-[#b8aca5]"
          />

          <Search
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#b8aca5]"
            size={24}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 py-6 scrollbar-hide">
        {categories.map((item, index) => (
          <button
            key={item}
            className={`min-w-[120px] sm:min-w-[140px] h-12 sm:h-14 rounded-full border text-sm sm:text-base font-semibold ${
              index === 0
                ? "bg-[#d6a8ad] text-white border-[#d6a8ad] shadow-lg"
                : "bg-white text-[#867975] border-[#eee3de]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="px-4 sm:px-6 space-y-6">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <div className="flex gap-4">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-[#2b1f1f]">
                  {perfume.name}
                </h2>

                <p className="text-[#b8aca5] text-sm sm:text-base mt-1">
                  {perfume.brand}
                </p>

                <div className="inline-flex px-4 py-1 rounded-full bg-[#f5efed] text-[#867975] text-xs sm:text-sm mt-3">
                  {perfume.category}
                </div>

                <p className="text-[#d6a2a7] text-lg sm:text-xl font-semibold mt-3">
                  {perfume.price}
                </p>
              </div>
            </div>

            <button className="w-full h-14 sm:h-16 rounded-full bg-[#d6a8ad] text-white text-base sm:text-lg font-bold mt-6">
              Try Scent
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f8f6f5] border-t border-[#ece3df] h-20 flex items-center justify-around px-2">
        <div className="flex flex-col items-center">
          <Home className="text-[#d6a2a7]" size={24} />
          <span className="text-[#d6a2a7] text-xs font-semibold mt-1">
            Home
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Heart className="text-[#b8aca5]" size={24} />
          <span className="text-[#b8aca5] text-xs font-semibold mt-1">
            Favorites
          </span>
        </div>

        <div className="flex flex-col items-center">
          <ShoppingCart className="text-[#b8aca5]" size={24} />
          <span className="text-[#b8aca5] text-xs font-semibold mt-1">
            Cart
          </span>
        </div>

        <div className="flex flex-col items-center">
          <User className="text-[#b8aca5]" size={24} />
          <span className="text-[#b8aca5] text-xs font-semibold mt-1">
            Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;