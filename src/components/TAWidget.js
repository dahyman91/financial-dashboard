import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import React from "react";

function TAWidget({ selectedTicker }) {
  return (
    <TechnicalAnalysis
      symbol={selectedTicker}
      interval={"1D"}
      colorTheme="light"
      // autosize="true"
      // height="1000%"
    ></TechnicalAnalysis>
  );
}

export default TAWidget;
