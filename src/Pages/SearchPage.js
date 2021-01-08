import React from "react";
import { useStateValue } from "../Context/StateProvider";
import useGoogleSearch from "../CustomHook/useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import Search from "../Components/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchPageOptions from "../Components/SearchPageOptions";
import SearchPageResult from "./SearchPageResult";
import Footer from "../Components/Footer";

const SearchPage = () => {
  //https://developers.google.com/custom-search/v1/using_rest
  //create search engine
  //https://cse.google.com/cse/create/new
  const [{ term = "No Input" }] = useStateValue();

  //   LIVE API CALL
  const { data } = useGoogleSearch(term);

  //   Mock API Call
  // const data = Response;

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__input">
          <div className="searchPage__headerLeft">
            <Link to="/">
              <img className="searchPage__logo" src={Logo} alt="Google" />
            </Link>
            <div className="searchPage__headerBody">
              <Search className="search" btnHidden />
            </div>
          </div>
          <div className=" header__right">
            <Link to="/search">
              <AppsIcon className="appicon" />
            </Link>
            <Link to="/search">
              <Avatar src="" alt="" className="header__avatar">
                G
              </Avatar>
            </Link>
          </div>
        </div>
        <div className="searchPage__options">
          <SearchPageOptions />
        </div>
      </div>
      {term ? (
        <div className="searchPage__result">
          <SearchPageResult data={data} term={term} />
        </div>
      ) : (
        <div className="searchPage__noResult"></div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
