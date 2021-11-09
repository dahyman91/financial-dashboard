import React, { useState, useEffect } from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import Nav from "./Nav";
import ComponentPlayground from "./ComponentPlayground";
import API_KEY from "../API";
import Ticker from "./Ticker";

function App() {
  const [searchedTickers, setSearchedTickers] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTicker, setSelectedTicker] = useState("msft");

  useEffect(() => {
    fetch("http://localhost:3000/symbols")
      .then((res) => res.json())
      .then((data) => {
        data.map((datum) => {
          fetch(
            `https://finnhub.io/api/v1/stock/profile2?symbol=${datum.symbol}&token=${API_KEY}`
          )
            .then((res) => res.json())
            .then((data) =>
              setCompanyDetails((companyDetails) => [...companyDetails, data])
            );
        });
      });
  }, []);
  return (
    <>
      <Ticker />
      <>
        <Nav />
        {/* <div className="ui active centered inline loader">Header</div> */}
        <Search
          setSearchedTickers={setSearchedTickers}
          searchedTickers={searchedTickers}
          companyDetails={companyDetails}
          setCompanyDetails={setCompanyDetails}
        />
        <CardContainer
          searchedTickers={searchedTickers}
          companyDetails={companyDetails}
          setCompanyDetails={setCompanyDetails}
          setSelectedTicker={setSelectedTicker}
        />
        <ComponentPlayground selectedTicker={selectedTicker} />
      </>
    </>
  );
}

export default App;
