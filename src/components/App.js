import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ComponentPlayground from "./ComponentPlayground";
import API_KEY from "../API";
import Favorites from "./Favorites";
import "./style.css";

function App() {
  const [searchedTickers, setSearchedTickers] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [curPage, setCurPage] = useState("dashboard");

  useEffect(() => {
    fetch("https://shrouded-cliffs-39592.herokuapp.com/symbols")
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setSelectedTicker(data[0].symbol);
        }
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
      <Route exact path="/">
        <>
          <Favorites
            setSearchedTickers={setSearchedTickers}
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setSelectedTicker={setSelectedTicker}
            setCompanyDetails={setCompanyDetails}
            curPage={curPage}
            setCurPage={setCurPage}
            selectedTicker={selectedTicker}
          />
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

export default App;
