import React from "react";
import "./App.css";
import SignupForm from "./components/signup form component/SignupForm";
import HomePage from "./components/home page component/HomePage";
import UpdateProfile from "./components/profile update component/UpdateProfile";
import ForgotPassword from "./components/forgot password component/ForgotPassword";

import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/login form component/LoginForm";
import ExpensesTracker from "./components/expenses tracking component/ExpensesTracker";

const App = () => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>

        {isAuthenticated ? (
          <>
            <Route path="/homePage" element={<HomePage />} />

            <Route path="/updateProfile" element={<UpdateProfile />} />

            <Route path="/expenseTracker" element={<ExpensesTracker />} />
          </>
        ) : (
          <>
          <Route path="*" element={<LoginForm />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
