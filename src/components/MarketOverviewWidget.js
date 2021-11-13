import React from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";

function MarketOverviewWidget() {
  return (
    <div>
      <MarketOverview
        colorTheme="light"
        height={400}
        showFloatingTooltip
      ></MarketOverview>
    </div>
  );
}

export default MarketOverviewWidget;
