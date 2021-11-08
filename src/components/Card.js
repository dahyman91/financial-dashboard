import React from "react";

function Card({ company, logo, name, id, companyDetails, setCompanyDetails}) {
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
          <a className="header">{company}</a>
          <div className="meta">
            <span className="date">Created in Sep 2014</span>
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
