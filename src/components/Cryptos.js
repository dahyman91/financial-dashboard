import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

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
    <Table
      celled
      style={{
        textAlign: "center",
        border: "none",
      }}
    >
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Maket Cap ($M)</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>{data.data ? data.data[0].name : null}</Table.Cell>
          <Table.Cell>
            {data.data
              ? Number.parseFloat(
                  Math.floor(data.data[0]["market_cap_usd"]) / 1000000
                ).toFixed(2)
              : null}
          </Table.Cell>
          <Table.Cell>
            {data.data ? data.data[0]["price_usd"] : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{data.data ? data.data[1].name : null}</Table.Cell>
          <Table.Cell>
            {data.data
              ? Number.parseFloat(
                  Math.floor(data.data[1]["market_cap_usd"]) / 1000000
                ).toFixed(2)
              : null}
          </Table.Cell>
          <Table.Cell>
            {data.data ? data.data[1]["price_usd"] : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{data.data ? data.data[2].name : null}</Table.Cell>
          <Table.Cell>
            {data.data
              ? Number.parseFloat(
                  Math.floor(data.data[2]["market_cap_usd"]) / 1000000
                ).toFixed(2)
              : null}
          </Table.Cell>
          <Table.Cell>
            {data.data ? data.data[2]["price_usd"] : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{data.data ? data.data[3].name : null}</Table.Cell>
          <Table.Cell>
            {data.data
              ? Number.parseFloat(
                  Math.floor(data.data[3]["market_cap_usd"]) / 1000000
                ).toFixed(2)
              : null}
          </Table.Cell>
          <Table.Cell>
            {data.data ? data.data[3]["price_usd"] : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{data.data ? data.data[4].name : null}</Table.Cell>
          <Table.Cell>
            {data.data
              ? Number.parseFloat(
                  Math.floor(data.data[4]["market_cap_usd"]) / 1000000
                ).toFixed(2)
              : null}
          </Table.Cell>
          <Table.Cell>
            {data.data ? data.data[4]["price_usd"] : null}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default Cryptos;
