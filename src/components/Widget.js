import TradingViewWidget from "react-tradingview-widget";

const Widget = ({ selectedTicker }) => (
  <TradingViewWidget symbol={`${selectedTicker}`} />
);

export default Widget;
