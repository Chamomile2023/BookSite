import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
