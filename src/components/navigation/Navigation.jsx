import React from "react";
import searchIcon from "../../images/search-icon.svg";

export const Navigation = ({ children }) => {
  return (
    <div className="navigation">
      <p>{children}</p>
      <div className="search-bar">
        <img src={searchIcon} alt="search" />
        <input type="text" placeholder="Backend Developer" />
        <button>Find Now</button>
      </div>
    </div>
  );
};
