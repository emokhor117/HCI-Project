import React, { useState } from "react";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const reactions = [
  { label: "Love", icon: "❤️", value: "love" },
  { label: "Like", icon: "👍", value: "like" },
  { label: "Neutral", icon: "😐", value: "neutral" },
  { label: "Dislike", icon: "👎", value: "dislike" },
];

const Feedback = () => {
  const navigate = useNavigate();
  const { state: perfume } = useLocation();
  const [selected, setSelected] = useState(null);
  const [added, setAdded] = useState(false);

  const handleAddToFavorites = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f5] flex flex-col px-5 pt-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-center relative mb-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
        >
          <ArrowLeft size={20} className="text-[#2b1f1f]" />
        </button>
        <h1 className="text-lg font-bold text-[#2b1f1f]">Your Feedback</h1>
      </div>

      {/* Star Icon */}
      <div className="flex flex-col items-center mb-8">
        <div
          className={`w-20 h-20 rounded-full bg-[#d6a8ad] flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 ${
            selected ? "scale-110" : "scale-100"
          }`}
        >
          <Star size={36} className="text-white fill-white" />
        </div>
        <h2 className="text-xl font-bold text-[#2b1f1f]">
          How do you like this scent?
        </h2>
        <p className="text-sm text-[#b8aca5] mt-1 text-center">
          Your feedback helps us recommend better fragrances
        </p>
      </div>

      {/* Reaction Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {reactions.map((r) => (
          <button
            key={r.value}
            onClick={() => setSelected(r.value)}
            className={`h-24 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 transition-all duration-200 ${
              selected === r.value
                ? "border-[#d6a8ad] bg-[#fdf0f1] scale-95 shadow-md"
                : "border-[#eee3de] bg-white"
            }`}
          >
            <span className="text-2xl">{r.icon}</span>
            <span
              className={`text-sm font-semibold ${
                selected === r.value ? "text-[#d6a8ad]" : "text-[#867975]"
              }`}
            >
              {r.label}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback confirmation */}
      {selected && (
        <div className="bg-[#fdf0f1] rounded-2xl px-4 py-3 mb-6 text-center border border-[#f0d8da]">
          <p className="text-sm text-[#d6a8ad] font-semibold">
            You reacted{" "}
            <span className="text-[#2b1f1f]">
              "{reactions.find((r) => r.value === selected)?.label}"
            </span>{" "}
            to {perfume?.name} 🌸
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-4 mt-auto">
        <button
          onClick={handleAddToFavorites}
          className={`w-full h-14 rounded-full border-2 font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? "border-[#d6a8ad] bg-[#d6a8ad] text-white"
              : "border-[#d6a8ad] text-[#d6a8ad] bg-white"
          }`}
        >
          <Heart size={18} className={added ? "fill-white text-white" : ""} />
          {added ? "Added to Favorites!" : "Add to Favorites"}
        </button>

        <button className="w-full h-14 rounded-full bg-[#c8b8b4] text-white font-bold text-base flex items-center justify-center gap-2">
          <ShoppingBag size={18} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Feedback;