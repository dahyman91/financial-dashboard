import React from "react";

function Nav() {
  return (
    <div className="ui right fixed vertical menu">
      <div className="item">
        <img className="ui mini image" src="/images/logo.png" />
      </div>
      <a className="item">Favorites</a>
      <a className="item">Dashboard</a>
    </div>
  );
}

export default Nav;
