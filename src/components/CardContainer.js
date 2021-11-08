import React, { useEffect } from "react";
import Card from "./Card";
import API_KEY from "../API";

function CardContainer({ searchedTickers, companyDetails, setCompanyDetails }) {

  return (
    <div className="ui cards">
      {companyDetails.map((element) => (
        <Card key={element.name} logo={element.logo}/>
      ))}
    </div>
  );
}

export default CardContainer;
