import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./Search";
import CardContainer from "./CardContainer";
import Nav from "./Nav";
import ComponentPlayground from "./ComponentPlayground";
import API_KEY from "../API";
import Ticker from "./Ticker";
import "./style.css";
import GeneralNews from "./GeneralNews";

function Favorites() {
  const [searchedTickers, setSearchedTickers] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [curPage, setCurPage] = useState("dashboard");

  useEffect(() => {
    fetch("http://localhost:3000/symbols")
      .then((res) => res.json())
      .then((data) => {
        // setSearchedTickers(data);
        if(data[0]){setSelectedTicker(data[0].symbol);}
        data.map((datum) => {
          setSearchedTickers((searchedTickers) => [
            ...searchedTickers,
            datum.symbol,
          ]); 
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
    <Switch>
      <Route path="/favorites">
        <>
          {/* <Ticker /> */}
          <Nav
            curPage={curPage}
            setCurPage={setCurPage}
            selectedTicker={selectedTicker}
            searchedTickers={searchedTickers}
          />

          {/* <div className="ui active centered inline loader">Header</div> */}
          <Search
            setSearchedTickers={setSearchedTickers}
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
          />

          <CardContainer
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
            setSearchedTickers={setSearchedTickers}
          />
          <GeneralNews/>
        </>
      </Route>
      <Route path="/dashboard/:selectedTicker">
        <ComponentPlayground
          setSelectedTicker={setSelectedTicker}
          selectedTicker={selectedTicker}
          searchedTickers={searchedTickers}
        />
      </Route>
    </Switch>
  );
}

export default Favorites;
