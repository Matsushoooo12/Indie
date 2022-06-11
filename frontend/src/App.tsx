import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Login />
    </>
  );
};

export default App;
