import React, { useState, useEffect } from "react";
import { ArrowLeft, Bluetooth } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const PHASES = {
  CONNECTING: "connecting",
  CONNECTED: "connected",
  RELEASING: "releasing",
  RELEASED: "released",
};

const ScentInteraction = () => {
  const navigate = useNavigate();
  const { state: perfume } = useLocation();
  const [intensity, setIntensity] = useState(50);
  const [phase, setPhase] = useState(PHASES.CONNECTING);
  const [connectionDots, setConnectionDots] = useState("");

  // Effect 1 — Connecting animation + auto transition to CONNECTED
  useEffect(() => {
    if (phase !== PHASES.CONNECTING) return;

    const dotsInterval = setInterval(() => {
      setConnectionDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const connectTimeout = setTimeout(() => {
      clearInterval(dotsInterval);
      setPhase(PHASES.CONNECTED);
    }, 3500);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(connectTimeout);
    };
  }, [phase]);

  // Effect 2 — After releasing, wait then navigate to feedback
 useEffect(() => {
    if (phase !== PHASES.RELEASING) return;

    const releaseTimeout = setTimeout(() => {
      setPhase(PHASES.RELEASED);
    }, 6000);

    const navigateTimeout = setTimeout(() => {
      navigate("/feedback", { state: perfume });
    }, 7500);

    return () => {
      clearTimeout(releaseTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [phase, navigate, perfume]);

  const handleRelease = () => {
    if (phase !== PHASES.CONNECTED) return;
    setPhase(PHASES.RELEASING);
  };

  const isConnecting = phase === PHASES.CONNECTING;
  const isConnected = phase === PHASES.CONNECTED;
  const isReleasing = phase === PHASES.RELEASING;
  const isReleased = phase === PHASES.RELEASED;

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
        <h1 className="text-lg font-bold text-[#2b1f1f]">Scent Experience</h1>
      </div>

      {/* Device Status Card */}
      <div className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm mb-10">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${
              isConnecting ? "bg-[#f0e8e6]" : "bg-[#d6a8ad]"
            }`}
          >
            <Bluetooth
              size={18}
              className={`transition-colors duration-500 ${
                isConnecting ? "text-[#b8aca5]" : "text-white"
              }`}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-[#2b1f1f]">Olfactory Device</p>
            <p
              className={`text-xs transition-colors duration-300 ${
                isConnecting ? "text-[#b8aca5]" : "text-green-500"
              }`}
            >
              {isConnecting ? `Connecting${connectionDots}` : "Connected"}
            </p>
          </div>
        </div>

        <div
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
            isConnecting
              ? "bg-[#b8aca5] animate-pulse"
              : "bg-green-400 shadow-sm shadow-green-300"
          }`}
        />
      </div>

      {/* Ripple / Connecting Animation */}
      <div className="flex items-center justify-center flex-1 mb-10">
        {isConnecting ? (
          <div className="relative flex items-center justify-center w-52 h-52">
            <div className="absolute w-52 h-52 rounded-full border-2 border-[#d6a8ad] opacity-20 animate-ping" />
            <div
              className="absolute w-36 h-36 rounded-full border-2 border-[#d6a8ad] opacity-30 animate-ping"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="absolute w-20 h-20 rounded-full border-2 border-[#d6a8ad] opacity-50 animate-ping"
              style={{ animationDelay: "0.6s" }}
            />
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Bluetooth size={28} className="text-[#d6a8ad]" />
            </div>
          </div>
        ) : (
          <div className="relative flex items-center justify-center w-52 h-52">
            <div
              className={`absolute w-52 h-52 rounded-full bg-[#d6a8ad] opacity-10 ${
                isReleasing ? "animate-ping" : ""
              }`}
            />
            <div
              className={`absolute w-40 h-40 rounded-full bg-[#d6a8ad] opacity-20 ${
                isReleasing ? "animate-ping" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className={`absolute w-28 h-28 rounded-full bg-[#d6a8ad] opacity-30 ${
                isReleasing ? "animate-ping" : ""
              }`}
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className={`w-16 h-16 rounded-full shadow-lg transition-all duration-700 ${
                isReleased ? "bg-green-400 scale-110" : "bg-[#d6a8ad]"
              } ${isReleasing ? "scale-125" : "scale-100"}`}
            />
          </div>
        )}
      </div>

      {/* Status Text */}
      <div className="text-center mb-6 min-h-[40px]">
        {isConnecting && (
          <p className="text-sm text-[#b8aca5]">
            Looking for your olfactory device{connectionDots}
          </p>
        )}
        {isConnected && (
          <p className="text-sm text-green-500 font-semibold">
            ✓ Device ready — release the scent when you're ready
          </p>
        )}
        {isReleasing && (
          <p className="text-sm text-[#d6a8ad] font-semibold animate-pulse">
            🌸 Diffusing {perfume?.name}... enjoy the experience
          </p>
        )}
        {isReleased && (
          <p className="text-sm text-green-500 font-semibold">
            ✓ Scent experience complete!
          </p>
        )}
      </div>

      {/* Release Button */}
      <button
        onClick={handleRelease}
        disabled={isConnecting || isReleasing || isReleased}
        className={`w-full h-14 rounded-full text-white font-bold text-base mb-8 transition-all duration-500 ${
          isConnecting
            ? "bg-[#c8b8b4] opacity-50 cursor-not-allowed"
            : isReleased
            ? "bg-green-400"
            : isReleasing
            ? "bg-[#c49097] animate-pulse cursor-not-allowed"
            : "bg-[#d6a8ad] hover:bg-[#c49097]"
        }`}
      >
        {isConnecting
          ? "Waiting for device..."
          : isReleasing
          ? "Releasing..."
          : isReleased
          ? "✓ Complete!"
          : "Release Scent"}
      </button>

      {/* Intensity Slider */}
      {!isConnecting && (
        <div className="bg-white rounded-2xl px-5 py-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-[#2b1f1f]">Intensity</p>
            <p className="text-sm font-bold text-[#d6a8ad]">{intensity}%</p>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            disabled={isReleasing || isReleased}
            className="w-full accent-[#d6a8ad] h-2 rounded-full cursor-pointer disabled:opacity-50"
          />

          <div className="flex justify-between mt-2">
            <span className="text-xs text-[#b8aca5]">Low</span>
            <span className="text-xs text-[#b8aca5]">High</span>
          </div>

          <p className="text-center text-xs text-[#b8aca5] mt-4">
            Scent duration: ~30 seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default ScentInteraction;