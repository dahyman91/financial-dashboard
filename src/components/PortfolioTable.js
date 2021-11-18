import React from "react";
import { Table } from "semantic-ui-react";
import { PortfolioTableRow } from "./PortfolioTableRow";

const PortfolioTable = ({ tableInfo }) => (
  <Table
    singleLine
    style={{
      border: "1px solid #EDD193",
      filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
    }}
  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Stock</Table.HeaderCell>
        <Table.HeaderCell>Price Per Share</Table.HeaderCell>
        <Table.HeaderCell>Number of Shares</Table.HeaderCell>
        <Table.HeaderCell>Total Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {tableInfo.filter(element => element.shares> 0).map((element) => (
        <PortfolioTableRow
          key={element.symbol}
          stock={element.symbol}
          shares={element.shares}
        />
      ))}
    </Table.Body>
  </Table>
);

export default PortfolioTable;
