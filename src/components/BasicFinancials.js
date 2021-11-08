import React from "react";
import API_KEY from "../API";

function BasicFinancials() {
  let metrics = fetch(
    `https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data.metric));

  return <div>{}</div>;
}

export default BasicFinancials;
