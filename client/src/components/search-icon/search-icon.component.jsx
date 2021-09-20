import React from "react";
import "./search-icon.styles.scss";
import { ReactComponent as SearchMagnifierIcon } from "../../assets/magnifier.svg";

const SearchIcon = () => {
  return (
    <div className="container-wrapper">
      <SearchMagnifierIcon></SearchMagnifierIcon>
    </div>
  );
};

export default SearchIcon;
