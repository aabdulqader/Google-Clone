import React from "react";
import "./SearchPageOptions.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
const SearchPageOptions = () => {
  return (
    <div className="searchPageOptions">
      <div className="searchPageOptions__left">
        <Link to="">
          <SearchIcon />
          <p>All</p>
        </Link>
        <Link to="">
          <ImageOutlinedIcon />
          <p>Image</p>
        </Link>
        <Link to="">
          <DescriptionOutlinedIcon />
          <p>News</p>
        </Link>
        <Link to="">
          <RoomOutlinedIcon />
          <p>Maps</p>
        </Link>
        <Link to="">
          <OndemandVideoOutlinedIcon />
          <p>Videos</p>
        </Link>
        <Link to="">
          <MoreVertOutlinedIcon />
          <p>More</p>
        </Link>
      </div>
      <div className="searchPageOptions__right">
        <a href="https://www.google.com/preferences" target="__blank">
          Settings
        </a>
        <a href="https://www.google.com/preferences">Tools</a>
      </div>
    </div>
  );
};

export default SearchPageOptions;
