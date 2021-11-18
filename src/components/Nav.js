import React from "react";
import { Link } from "react-router-dom";

function Nav({ curPage, selectedTicker }) {
  return (
    <div className="ui tabular menu">
      <Link to="/" className={curPage === "dashboard" ? "item active" : "item"}>
        Portfolio
      </Link>
      <Link
        to={selectedTicker ? `/dashboard/${selectedTicker}` : "#"}
        className={curPage !== "dashboard" ? "item active" : "item"}
      >
        Stock Details
      </Link>
    </div>
  );
}

export default Nav;
