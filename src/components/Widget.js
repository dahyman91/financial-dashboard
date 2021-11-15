import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Widget = ({ selectedTicker }) => (
  <AdvancedRealTimeChart
    symbol={`${selectedTicker}`}
    autosize
    locale="fr"
  ></AdvancedRealTimeChart>
);

export default Widget;
