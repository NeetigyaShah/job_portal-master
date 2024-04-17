import React from "react";
import logo from "../bit-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="App-header">
        <p className="heading">
          Find job with <code style={{ color: "Turquoise" }}>VIT's</code> OWN JOB
          PORTAL.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/jobs">
          Find your Job now !!
        </Link>
      </header>
    </>
  );
};

export default Home;
