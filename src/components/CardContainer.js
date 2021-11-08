import React, { useEffect } from "react";
import Card from "./Card";

function CardContainer({
  companyDetails,
  setCompanyDetails,
  setSelectedTicker,
}) {
  return (
    <div style={{ width: "90vw", margin: "2% auto" }}>
      <div className="ui six column stackable grid">
        {companyDetails.map((element) => (
          <Card
            key={element.name}
            name={element.name}
            logo={element.logo}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            id={element.ticker}
            ipo={element.ipo}
            company={element}
            setSelectedTicker={setSelectedTicker}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
