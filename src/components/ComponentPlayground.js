import React, { useEffect } from "react";
import BasicFinancials from "./BasicFinancials";
import Nav from "./Nav";
import Widget from "./Widget";
import StockDropdown from "./StockDropdown";
import { useParams, useRouteMatch } from "react-router-dom";

function ComponentPlayground({
  selectedTicker,
  setSelectedTicker,
  searchedTickers,
}) {
  const match = useRouteMatch();
  const params = useParams();

  // console.log(params.selectedTicker);

  useEffect(() => setSelectedTicker(params.selectedTicker), []);

  return (
    <>
      <Nav />
      <StockDropdown
        searchedTickers={searchedTickers}
        setSelectedTicker={setSelectedTicker}
      />
      <div
        style={{
          width: "100%",
        }}
      >
        {selectedTicker ? (
          <BasicFinancials selectedTicker={selectedTicker} />
        ) : null}
        <Widget selectedTicker={selectedTicker} />
      </div>
    </>
  );
}

export default ComponentPlayground;
