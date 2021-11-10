import React from "react";
import BasicFinancials from "./BasicFinancials";
import Widget from "./Widget";
import Ticker from "./Ticker";

function ComponentPlayground({ selectedTicker }) {
  return (
    <>
      <div
        style={{
          borderTop: "1px solid black",
          width: "100%",
          position: "absolute",
          top: "200vh",
        }}
      >
        <BasicFinancials selectedTicker={selectedTicker} />
        <Widget selectedTicker={selectedTicker} />
        <Ticker />
      </div>
    </>
  );
}

export default ComponentPlayground;
