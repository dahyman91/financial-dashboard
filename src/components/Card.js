import React from "react";

function Card({ company, logo, name, id, companyDetails, setCompanyDetails, ipo}) {
  function handleDelete(){
    fetch(`http://localhost:3000/symbols/${id}`,{
      method:'DELETE'
    }).then(
      setCompanyDetails((companyDetails)=>{
        return companyDetails.filter((company)=>{
          return company.ticker !== id
        })
      })
    )
  }
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
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">IPO: {ipo}</span>
          </div>
        </div>
        <div className="extra content">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Card;
