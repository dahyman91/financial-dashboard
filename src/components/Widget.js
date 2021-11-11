import TradingViewWidget from "react-tradingview-widget";

const Widget = ({ selectedTicker }) => (
  <TradingViewWidget locale="fr" autosize symbol={`${selectedTicker}`} />
);

export default Widget;
