import { signOut } from "firebase/auth";
import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>Home</div>
      <div>
        <button onClick={signOutWithGoogle}>Sign Out</button>
      </div>
    </>
  );
};

export default Home;
