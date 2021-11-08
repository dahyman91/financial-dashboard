import React, { useEffect } from "react";
import Card from "./Card";
import API_KEY from "../API";

function CardContainer({ companyDetails, setCompanyDetails }) {

  return (
    <div className="ui cards">
      {companyDetails.map((element) => (
        <Card key={element.name} name = {element.name} logo={element.logo} companyDetails= {companyDetails} setCompanyDetails={setCompanyDetails} id={element.ticker} ipo={element.ipo} company={element}/>
      ))}
    </div>
  );
}

export default CardContainer;
