import React, { useState, useEffect } from "react";
import API_KEY from "../API";
import { Table, Button, Icon } from "semantic-ui-react";

export const PortfolioTableRow = ({ stock, shares, tableInfo, setTableInfo }) => {
  const [stockName, setStockName] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  function handleDelete() {
    setTableInfo((tableInfo) =>
      tableInfo.filter((element) => element.symbol !== stock)
    );
    fetch(`https://shrouded-cliffs-39592.herokuapp.com/tableData/${stock}`, {
      method: "DELETE",
    });
  }

  useEffect(() => {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setStockPrice(data.c));
  }, [stock]);

  useEffect(() => {
    fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setStockName(data.name));
  }, [stock]);

  return (
    <Table.Row style={{ textAlign: "center" }}>
      <Table.Cell>{stockName}</Table.Cell>
      <Table.Cell>{stockPrice}</Table.Cell>
      <Table.Cell>{shares}</Table.Cell>
      <Table.Cell>{stockPrice * shares}</Table.Cell>
      <Table.Cell>
        <Button color="red" onClick={handleDelete} icon>
          <Icon name="remove circle" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
