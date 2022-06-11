import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>Login</div>
      <div>
        <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
      </div>
    </>
  );
};

export default Login;
