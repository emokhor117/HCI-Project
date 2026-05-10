import React, { useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


const ProductDetail = () => {
  const navigate = useNavigate();
  const { state: perfume } = useLocation();
  const [liked, setLiked] = useState(false);
  const [smelling, setSmelling] = useState(false);

  const handleSmellSample = () => {
    setSmelling(true);
    setTimeout(() => setSmelling(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-10">
      {/* Hero Image */}
      <div className="relative w-full h-72 sm:h-96">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover"
        />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
        >
          <ArrowLeft size={20} className="text-[#2b1f1f]" />
        </button>

        {/* Heart button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
        >
          <Heart
            size={20}
            className={liked ? "text-[#d6a8ad] fill-[#d6a8ad]" : "text-[#b8aca5]"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 space-y-4">
        <p className="text-[#b8aca5] text-sm">{perfume.brand}</p>
        <h1 className="text-2xl font-bold text-[#2b1f1f]">{perfume.name}</h1>
        <p className="text-[#d6a2a7] text-xl font-semibold">{perfume.price}</p>
        <p className="text-[#867975] text-sm leading-relaxed">{perfume.description}</p>

        {/* Scent Notes */}
        {perfume.notes?.map((section) => (
          <div key={section.label}>
            <p className="text-[#2b1f1f] font-semibold text-sm mt-4 mb-2">
              ● {section.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {section.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full bg-[#f5efed] text-[#867975] text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Smell Sample Button */}
        <button
  onClick={() => navigate("/scent-interaction", { state: perfume })}
  className="w-full h-14 rounded-full bg-[#d6a8ad] text-white font-bold text-base mt-6"
>
  Smell Sample
</button>

        {/* Olfactory concept feedback */}
        {smelling && (
          <div className="w-full rounded-2xl bg-[#f5efed] p-4 text-center text-[#867975] text-sm">
            Your olfactory device is releasing the scent profile for{" "}
            <span className="font-semibold text-[#2b1f1f]">{perfume.name}</span>.
            Enjoy the preview! 🌹
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;