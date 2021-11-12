import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import React from "react";

function TAWidget({ selectedTicker }) {
  return (
    <TechnicalAnalysis
      symbol={selectedTicker}
      interval={"1D"}
      colorTheme="light"
    ></TechnicalAnalysis>
  );
}

export default TAWidget;
