import { MiniChart } from "react-ts-tradingview-widgets";

import React from "react";

function SmallChart({ symbol }) {
  return <MiniChart symbol={symbol} autosize colorTheme="light"></MiniChart>;
}

export default SmallChart;
