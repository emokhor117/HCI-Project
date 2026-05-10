import React from "react";
import {
  ArrowLeft,
  User,
  Settings,
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: Settings,
    label: "Account Settings",
    color: "text-[#d6a8ad]",
  },
  {
    icon: Bell,
    label: "Notifications",
    color: "text-[#d6a8ad]",
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    color: "text-[#d6a8ad]",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    color: "text-[#d6a8ad]",
  },
  {
    icon: LogOut,
    label: "Log Out",
    color: "text-red-400",
    isLogout: true,
  },
];

const Profile = () => {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.isLogout) {
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    }
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
        <h1 className="text-lg font-bold text-[#2b1f1f]">Profile</h1>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-[#d6a8ad] flex items-center justify-center mb-4 shadow-md">
          <User size={40} className="text-white" />
        </div>
        <h2 className="text-xl font-bold text-[#2b1f1f]">Sarah Johnson</h2>
        <p className="text-sm text-[#b8aca5] mt-1">sarah.j@example.com</p>
      </div>

      {/* Menu Items */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center justify-between px-5 py-4 transition-colors hover:bg-[#fdf0f1] ${
                index !== menuItems.length - 1
                  ? "border-b border-[#f5efed]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon size={20} className={item.color} />
                <span
                  className={`text-sm font-semibold ${
                    item.isLogout ? "text-red-400" : "text-[#2b1f1f]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              <ChevronRight size={18} className="text-[#b8aca5]" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;