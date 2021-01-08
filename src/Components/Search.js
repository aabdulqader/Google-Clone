import React, { useState } from "react";
import voiceIcon from "../Images/voiceIcon.png";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/Reducer";

const Search = ({ btnHidden = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const searchHandle = (e) => {
    e.preventDefault();
    if (input) {
      dispatch({
        type: actionType.SET_SEARCH_TERM,
        term: input,
      });

      history.push("/search");
    }
  };

  return (
    <form>
      <div className="search search__input">
        <SearchIcon className="search__Icon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="search"
          autoComplete="true"
        />
        <img src={voiceIcon} alt="" />
      </div>

      {!btnHidden ? (
        <div className="body__btn">
          <Button type="submit" onClick={searchHandle} className="btn">
            Google Search
          </Button>
          <Button className="btn">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="body__hidden">
          <Button type="submit" onClick={searchHandle} className="btn">
            Google Search
          </Button>
          <Button className="btn">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
