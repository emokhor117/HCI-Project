import React, { useState } from "react";
import { ArrowLeft, Heart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

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
        <h1 className="text-lg font-bold text-[#2b1f1f]">Favorites</h1>
      </div>

      {favorites.length === 0 ? (
        // Empty state
        <div className="flex flex-col items-center justify-center flex-1 gap-5">
          <div className="w-24 h-24 rounded-full bg-[#f5efed] flex items-center justify-center">
            <Heart size={40} className="text-[#d6a8ad]" strokeWidth={1.5} />
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-[#2b1f1f]">No favorites yet</p>
            <p className="text-sm text-[#b8aca5] mt-1">
              Try scents and add your favorites here for easy access
            </p>
          </div>
          <button
            onClick={() => navigate("/home")}
            className="h-12 px-8 rounded-full bg-[#d6a8ad] text-white font-bold text-sm"
          >
            Explore Perfumes
          </button>
        </div>
      ) : (
        // Favorites list
        <div className="space-y-4">
          {favorites.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-[#2b1f1f]">{item.name}</p>
                <p className="text-xs text-[#b8aca5] mt-0.5">{item.brand}</p>
                <p className="text-sm text-[#d6a2a7] font-semibold mt-1">{item.price}</p>
              </div>
              <button onClick={() => removeFromFavorites(item.id)}>
                <Trash2 size={18} className="text-[#d6a8ad]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;