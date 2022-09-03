import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

const App = () => {
  //Login Page
  const [auth, setAuth] = useState(false);
  const user = {
    user: "Admin123",
    password: "123456",
  };
  const navigate = useNavigate();
  const useAuth = (params) => {
    if (user.user === params.user && user.password === params.password ? navigate("/") : navigate("/login")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };
  return (
    <>
      <Routes>
        <Route
          index
          path="/login"
          element={<Login auth={auth} useAuth={useAuth} />}
        />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
