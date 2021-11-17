import React from "react";
import { Table } from "semantic-ui-react";
import { PortfolioTableRow } from "./PortfolioTableRow";

const PortfolioTable = ( {tableInfo }) => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Stock</Table.HeaderCell>
        <Table.HeaderCell>Price Per Share</Table.HeaderCell>
        <Table.HeaderCell>Number of Shares</Table.HeaderCell>
        <Table.HeaderCell>Total Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {tableInfo.map((element) => (
          <PortfolioTableRow key={element.symbol} stock={element.symbol} shares={element.shares}/> 
      ))}
    </Table.Body>
  </Table>
);

export default PortfolioTable;
