import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import Page404 from "./components/pages/Page404";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
