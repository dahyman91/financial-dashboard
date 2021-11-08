import React, { useEffect } from "react";
import Card from "./Card";
import API_KEY from "../API";

function CardContainer({ searchedTickers, companyDetails, setCompanyDetails }) {
  function fetchTickerDetails() {
    searchedTickers.map((ticker) => {
      fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setCompanyDetails([...companyDetails, data]));
    });
  }

  return (
    <div className="ui cards">
      {companyDetails.map((element) => (
        <Card key={element.name} />
      ))}
    </div>
  );
}

export default CardContainer;
