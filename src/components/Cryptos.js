import React, { useState, useEffect } from "react";

function Cryptos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
          "x-rapidapi-key":
            "4ca839f900msh641f54a9b7d60b3p18b2eejsnf3cf7176439f",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <table style={{ textAlign: "center" }}>
      <tr>
        <th>Name</th>
        <th>Maket Cap ($M)</th>
        <th>Price</th>
      </tr>

      <tr>
        <td>{data.data ? data.data[0].name : null}</td>
        <td>
          {data.data
            ? Number.parseFloat(
                Math.floor(data.data[0]["market_cap_usd"]) / 1000000
              ).toFixed(2)
            : null}
        </td>
        <td>{data.data ? data.data[0]["price_usd"] : null}</td>
      </tr>
      <tr>
        <td>{data.data ? data.data[1].name : null}</td>
        <td>
          {data.data
            ? Number.parseFloat(
                Math.floor(data.data[1]["market_cap_usd"]) / 1000000
              ).toFixed(2)
            : null}
        </td>
        <td>{data.data ? data.data[1]["price_usd"] : null}</td>
      </tr>
      <tr>
        <td>{data.data ? data.data[2].name : null}</td>
        <td>
          {data.data
            ? Number.parseFloat(
                Math.floor(data.data[2]["market_cap_usd"]) / 1000000
              ).toFixed(2)
            : null}
        </td>
        <td>{data.data ? data.data[2]["price_usd"] : null}</td>
      </tr>
      <tr>
        <td>{data.data ? data.data[3].name : null}</td>
        <td>
          {data.data
            ? Number.parseFloat(
                Math.floor(data.data[3]["market_cap_usd"]) / 1000000
              ).toFixed(2)
            : null}
        </td>
        <td>{data.data ? data.data[3]["price_usd"] : null}</td>
      </tr>
      <tr>
        <td>{data.data ? data.data[4].name : null}</td>
        <td>
          {data.data
            ? Number.parseFloat(
                Math.floor(data.data[4]["market_cap_usd"]) / 1000000
              ).toFixed(2)
            : null}
        </td>
        <td>{data.data ? data.data[4]["price_usd"] : null}</td>
      </tr>
    </table>
  );
}

export default Cryptos;
