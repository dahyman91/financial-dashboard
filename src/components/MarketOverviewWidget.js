import React from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";

function MarketOverviewWidget() {
  return (
    <div>
      <MarketOverview
        style={{ textAlign: "center" }}
        colorTheme="light"
        height={400}
        showFloatingTooltip
      />
    </div>
  );
}

export default MarketOverviewWidget;
