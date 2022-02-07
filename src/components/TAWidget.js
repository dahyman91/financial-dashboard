import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import React from "react";

function TAWidget({ selectedTicker }) {
  return (
    <TechnicalAnalysis
      responsive
      symbol={selectedTicker}
      interval={"1D"}
      colorTheme="light"
    />
  );
}

export default TAWidget;
