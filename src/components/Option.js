import React from "react";
import API_KEY from "../API";
import { Table, Header, Button } from "semantic-ui-react";
export default function Option({
  element,
  setLoading,
  setErr,
  setHeader,
  setSelectedTicker,
  setCompanyDetails,
  searchedTickers,
  setSearchedTickers,
  setElements,
  setOpen,
}) {
  function handleSelect() {
    if (searchedTickers.includes(element.symbol)) {
      setLoading(false);
      setHeader("No Stock Added");
      setErr("Read your buttons, it in der cuh");
    } else {
      setSearchedTickers([...searchedTickers, element.symbol]);
      fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${element.symbol}&token=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!searchedTickers[0]) {
            setSelectedTicker(data.ticker);
          }
          if (data.ticker && !data.ticker.includes(".")) {
            setCompanyDetails((companyDetails) => [...companyDetails, data]);
            // alert(`Added ${data.name} to your favorite stocks`);
            setLoading(false);
            setHeader("Stock Added");
            setErr(`Added ${data.name} to your favorite stocks`);
            fetch("https://shrouded-cliffs-39592.herokuapp.com/symbols", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                symbol: data.ticker,
                id: data.ticker,
              }),
            });
          }
        });
    }
    setElements([]);
    setOpen(false);
  }
  return (
    <Table.Row textAlign="center">
      <Table.Cell>
        <Header as="h2" textAlign="center">
          {element.logo ? (
            <img src={element.logo} alt={element.name} />
          ) : (
            <p style={{ fontSize: "1.2rem" }}>No Logo</p>
          )}
        </Header>
      </Table.Cell>
      <Table.Cell singleLine>{element.name}</Table.Cell>
      <Table.Cell>{element.symbol}</Table.Cell>
      <Table.Cell>
        <Button onClick={handleSelect}>Add Stock</Button>
      </Table.Cell>
    </Table.Row>
  );
}
