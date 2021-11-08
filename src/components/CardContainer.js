import React, { useEffect } from "react";
import Card from "./Card";
import API_KEY from "../API";

function CardContainer({ companyDetails, setCompanyDetails }) {

  return (
    <div className="ui cards">
      {companyDetails.map((element) => (
        <Card key={element.name} logo={element.logo} companyDetails= {companyDetails} setCompanyDetails={setCompanyDetails} id={element.ticker}/>
      ))}
    </div>
  );
}

export default CardContainer;
