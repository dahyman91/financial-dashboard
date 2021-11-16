import { MiniChart } from "react-ts-tradingview-widgets";

import React from "react";

function SmallChart({ symbol }) {
  return <MiniChart symbol={symbol} autosize colorTheme="dark"></MiniChart>;
}

export default SmallChart;
