
import React, {useState, useEffect} from "react";
import { Pie } from "react-chartjs-2";

function PieChart ({tableInfo}) {
  const [chartLables, setChartLabels] = useState([])
  const [shares, setShares] = useState([])
  const [price, setPrice] = useState([])
  const [percent, setPercent] = useState([])
  let total = 0;

    useEffect(() => {
      if(tableInfo) {
        tableInfo.map((stockSpread) => {
          setChartLabels((chartLables) => [...chartLables, stockSpread.symbol])
          setShares((shares) => [...shares, stockSpread.shares])
          setPrice((price) => [...price, stockSpread.price])
        })
    }},[tableInfo])

    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    } 

    useEffect(() => {
      if (price) {
        for (let x = 0; x < price.length; x++) {
          total += (price[x]*shares[x])
        }
        for (let y=0;y<chartLables.length;y++) {
          setPercent((percent)=> [...percent, percentage((price[y] * shares[y]), total)])
        }
      }
    }, [price]);

    



    

  const data = {
    labels: chartLables,
    datasets: [
      {
        label: "# of Votes",
        data: percent,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 102, 255, 0.2)",
          "rgba(0,255,255,0.2)",
          "rgba(210,105,30,0.2)",
          "rgba(0,100,0,0.2)",
          "rgba(240,128,128,0.2)",
          "rgba(25,25,112,0.2)",
          "rgba(218,112,214,0.2)",
          "rgba(112,128,144,0.2)",
          "rgba(128,0,0,0.2)",
          "rgba(128,128,0,0.2)",
          "rgba(124,252,0,0.2)",
          "rgba(0,191,255,0.2)",
          "rgba(139,0,139,0.2)",
          "rgba(188,143,143,0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 102, 255, 0.2)",
          "rgba(0,255,255,0.2)",
          "rgba(210,105,30,0.2)",
          "rgba(0,100,0,0.2)",
          "rgba(240,128,128,0.2)",
          "rgba(25,25,112,0.2)",
          "rgba(218,112,214,0.2)",
          "rgba(112,128,144,0.2)",
          "rgba(128,0,0,0.2)",
          "rgba(128,128,0,0.2)",
          "rgba(124,252,0,0.2)",
          "rgba(0,191,255,0.2)",
          "rgba(139,0,139,0.2)",
          "rgba(188,143,143,0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header" style={{ width: "500px" }}>
        <h1 className="title">Portfolio</h1>
        <Pie data={data} options={{}} />
      </div>
    </>
  );
};

export default PieChart;