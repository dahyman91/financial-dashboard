import React from "react";

function Card({
  logo,
  name,
  id,
  companyDetails,
  setCompanyDetails,
  ipo,
  setSelectedTicker,
}) {
  function handleDelete() {
    fetch(`http://localhost:3000/symbols/${id}`, {
      method: "DELETE",
    }).then(
      setCompanyDetails((companyDetails) => {
        return companyDetails.filter((company) => {
          return company.ticker !== id;
        });
      })
    );
  }

  function handleClick() {
    setSelectedTicker(id);
  }
  return (
    <>
      <div class="column">
        <div className="ui fluid card">
          <div className="ui slide masked reveal image">
            <img
              alt="logo"
              src={logo}
              style={{ height: "auto", width: "258px" }}
              className="visible content"
            />
            <p className="hidden content">{name}</p>
            <div className="content">
              <a onClick={handleClick} className="header">
                {name}
              </a>
              <div className="meta">
                <span className="date">IPO: {ipo}</span>
              </div>
            </div>
            <div className="extra content">
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
