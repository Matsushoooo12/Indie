import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>Home</div>
      <Link to="/login">ログイン</Link>
    </>
  );
};

export default Home;
