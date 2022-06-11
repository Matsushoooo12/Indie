import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>Login</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Login;
