import React from "react";
import { Link } from "react-router-dom";

function Nav({ curPage, selectedTicker }) {
  return (
    <div className="ui tabular menu">
      <Link to="/" className={curPage === "dashboard" ? "item active" : "item"}>
        Favorite Stocks
      </Link>
      <Link
        to={selectedTicker ? `/dashboard/${selectedTicker}` : "#"}
        className={curPage !== "dashboard" ? "item active" : "item"}
      >
        Dashboard
      </Link>
    </div>
  );
}

export default Nav;
