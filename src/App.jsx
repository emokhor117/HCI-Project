import React, { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

const App = () => {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <LoginPage
          goToSignup={() => setPage("signup")}
          goToHome={() => setPage("home")}
        />
      )}

      {page === "signup" && (
        <SignupPage
          goToLogin={() => setPage("login")}
          goToHome={() => setPage("home")}
        />
      )}

      {page === "home" && <HomePage />}
    </>
  );
};

export default App;