import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer({
  companyDetails,
  setCompanyDetails,
  setSelectedTicker,
  searchedTickers,
  setSearchedTickers,
}) {
  const [count, setCount] = useState(null);

  useEffect(
    () => setInterval(() => setCount((count) => (count += 1)), 30000),
    []
  );

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
            count={count}
            searchedTickers={searchedTickers}
            setSearchedTickers={setSearchedTickers}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
