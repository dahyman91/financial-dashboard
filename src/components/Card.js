import React from "react";

function Card({ company, logo, name }) {
  return (
    <>
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img
            alt="logo"
            src= {logo}
            className="visible content"
          />
          <p className="hidden content">{name}</p>
        </div>
        <div className="content">
          <a className="header">{company}</a>
          <div className="meta">
            <span className="date">Created in Sep 2014</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="users icon"></i>2 Members
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
