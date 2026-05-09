import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
} from "lucide-react";

const SignupPage = ({ goToLogin, goToHome }) => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f6f5] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2b1f1f]">
            Create Account
          </h1>

          <p className="text-[#b9ada6] text-base sm:text-xl mt-4">
            Join ScentWear and discover your signature scent
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6 sm:space-y-8">
          {/* Name */}
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#867975] mb-3">
              Full Name
            </label>

            <div className="flex items-center bg-white border border-[#eee3de] rounded-3xl px-4 sm:px-6 h-16 sm:h-20 shadow-sm">
              <User className="text-[#b8aca5]" size={24} />

              <input
                type="text"
                placeholder="Enter your name"
                className="flex-1 bg-transparent outline-none ml-4 text-base sm:text-lg text-[#867975] placeholder:text-[#b8aca5]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#867975] mb-3">
              Email
            </label>

            <div className="flex items-center bg-white border border-[#eee3de] rounded-3xl px-4 sm:px-6 h-16 sm:h-20 shadow-sm">
              <Mail className="text-[#b8aca5]" size={24} />

              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none ml-4 text-base sm:text-lg text-[#867975] placeholder:text-[#b8aca5]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#867975] mb-3">
              Password
            </label>

            <div className="flex items-center bg-white border border-[#eee3de] rounded-3xl px-4 sm:px-6 h-16 sm:h-20 shadow-sm">
              <Lock className="text-[#b8aca5]" size={24} />

              <input
                type="password"
                placeholder="Create a password"
                className="flex-1 bg-transparent outline-none ml-4 text-base sm:text-lg text-[#867975] placeholder:text-[#b8aca5]"
              />

              <Eye className="text-[#b8aca5]" size={24} />
            </div>

            <p className="text-[#b8aca5] text-sm sm:text-base mt-3">
              Must be at least 8 characters
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <div
              onClick={() => setAgree(!agree)}
              className={`w-6 h-6 rounded-lg border-2 mt-1 cursor-pointer ${
                agree
                  ? "bg-[#d8a5aa] border-[#d8a5aa]"
                  : "border-[#867975]"
              }`}
            />

            <p className="text-sm sm:text-base font-semibold text-[#867975] leading-relaxed">
              I agree to the{" "}
              <span className="text-[#d6a2a7]">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#d6a2a7]">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Button */}
          <button
            onClick={goToHome}
            className="w-full h-16 sm:h-20 rounded-full bg-[#d6a8ad] text-white text-lg sm:text-xl font-bold shadow-lg"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-4 sm:py-6">
            <div className="flex-1 h-px bg-[#ece3df]" />

            <span className="text-[#b8aca5] text-sm sm:text-base whitespace-nowrap">
              Or sign up with
            </span>

            <div className="flex-1 h-px bg-[#ece3df]" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 sm:h-16 bg-white border border-[#eee3de] rounded-2xl text-base font-semibold text-[#2d2323]">
              Google
            </button>

            <button className="h-14 sm:h-16 bg-white border border-[#eee3de] rounded-2xl text-base font-semibold text-[#2d2323]">
              GitHub
            </button>
          </div>

          {/* Bottom */}
          <div className="text-center pt-6">
            <span className="text-[#867975] text-sm sm:text-base">
              Already have an account?
            </span>

            <button
              onClick={goToLogin}
              className="text-[#d6a2a7] text-sm sm:text-base font-bold ml-2"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;