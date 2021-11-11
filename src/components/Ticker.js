import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

function Ticker() {
  return (
    <TickerTape style={{ height: "10vh" }} colorTheme="light"></TickerTape>
  );
}

export default Ticker;
