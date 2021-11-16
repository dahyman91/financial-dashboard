import React from "react";
import { Link } from "react-router-dom";

function Nav({ curPage, setCurPage, selectedTicker, searchedTickers }) {
  return (
    <div class="ui tabular menu">
      <Link to="/" class={curPage === "dashboard" ? "item active" : "item"}>
        Favorite Stocks
      </Link>
      <Link
        to={selectedTicker ? `/dashboard/${selectedTicker}` : "#"}
        class={curPage !== "dashboard" ? "item active" : "item"}
      >
        Dashboard
      </Link>
    </div>
  );
}

export default Nav;
