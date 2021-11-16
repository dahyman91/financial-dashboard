import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Widget = ({ selectedTicker }) => (
  <AdvancedRealTimeChart
    symbol={`${selectedTicker}`}
    // autosize
    width="650"
    height="500"
    locale="us"
    hide_side_toolbar="true"
    hide_top_toolbar="true"
  ></AdvancedRealTimeChart>
);

export default Widget;
