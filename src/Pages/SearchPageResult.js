import React from "react";
import "./SearchPageResult.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const SearchPageResult = ({ data, term }) => {
  return (
    <div className="search__result">
      <p className="search__resultCount">
        About {data?.searchInformation.formattedTotalResults} results (
        {data?.searchInformation.formattedSearchTime} seconds) for{" "}
        <strong>{term}</strong>
      </p>
      {data?.items.map((item, index) => (
        <div key={index} className="search__resultItem">
          <a className="search__resultLink" href={item.link}>
            {item.pagemap?.cse_image?.length > 0 &&
              item.pagemap?.cse_image[0]?.src && (
                <img
                  className="search__resultImage"
                  src={
                    item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src
                  }
                  alt=""
                />
              )}
            {item.displayLink} <ArrowDropDownIcon />
          </a>
          <a className="search__resultTitle" href={item.link}>
            {item.title}
          </a>
          <p className="search__resultSnippet">{item.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPageResult;
