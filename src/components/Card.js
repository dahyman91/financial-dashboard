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
        <div
          className="ui fluid card"
          style={{
            filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
            // borderRadius: "10%",
          }}
        >
          <div className="ui slide masked reveal image">
            <div className="visible content first-card">
              <div className="first-card-info">
                <h2 className="price">Price</h2>
                <h3 className="ticker">Ticker</h3>
              </div>
            </div>
            <div className="hidden content image-container">
              <img className="logo" alt="logo" src={logo} />
            </div>

            <div
              className="content"
              style={{ background: "white", textAlign: "center" }}
            >
              <a onClick={handleClick} className="header">
                {name}
              </a>
              <div className="meta">
                <span className="date">IPO: {ipo}</span>
              </div>
              <div className="extra content">
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
