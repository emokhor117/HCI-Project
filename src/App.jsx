import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ScentInteraction from "./pages/ScentInteraction";
import Feedback from "./pages/Feedback";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

// Wrapper for LoginPage to inject navigation props
const LoginWrapper = () => {
  const navigate = useNavigate();
  return (
    <LoginPage
      goToHome={() => navigate("/home")}
      goToSignup={() => navigate("/signup")}
    />
  );
};

// Wrapper for SignupPage to inject navigation props
const SignupWrapper = () => {
  const navigate = useNavigate();
  return (
    <SignupPage
      goToHome={() => navigate("/home")}
      goToLogin={() => navigate("/login")}
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route goes to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/signup" element={<SignupWrapper />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/scent-interaction" element={<ScentInteraction />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;