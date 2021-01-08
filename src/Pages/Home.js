import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Logo from "../Images/logo.png";
import Search from "../Components/Search";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <a href="https://store.google.com" target="__blank">
            {" "}
            Store
          </a>
        </div>
        <div className="header__right">
          <a href="https://www.gmail.com" target="__blank">
            Gmail
          </a>
          <a
            href="https://www.google.com.bd/imghp?hl=en&tab=wi&authuser=0&ogbl"
            target="__blank"
          >
            Images
          </a>
          <Link to="/search">
            <AppsIcon className="appicon" />
          </Link>
          <Link to="/search">
            <Avatar alt="" src="" className="header__avatar">
              G
            </Avatar>
          </Link>
        </div>
      </div>
      <div className="home__body">
        <img src={Logo} alt="" />
        <div className="body__inputContainer">
          <Search />
        </div>
        <small>
          Google offered in: <strong>English</strong>
        </small>
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
