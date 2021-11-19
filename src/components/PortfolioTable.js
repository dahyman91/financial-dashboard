import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import { PortfolioTableRow } from "./PortfolioTableRow";

function PortfolioTable({ tableInfo, setTableInfo }) {
  const [totalPosition, setTotalPosition] = useState(0);
  const [totalShares, setTotalShares] = useState(0);

  return (
    <Table
      singleLine
      style={{
        border: "1px solid #EDD193",
        filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
      }}
    >
      <Table.Header>
        <Table.Row style={{ textAlign: "center" }}>
          <Table.HeaderCell>Stock</Table.HeaderCell>
          <Table.HeaderCell>Price Per Share</Table.HeaderCell>
          <Table.HeaderCell>Number of Shares</Table.HeaderCell>
          <Table.HeaderCell>Total Price</Table.HeaderCell>
          <Table.HeaderCell>Remove</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableInfo
          .filter((element) => element.shares > 0)
          .map((element) => (
            <PortfolioTableRow
              key={element.symbol}
              stock={element.symbol}
              shares={element.shares}
              tableInfo={tableInfo}
              setTableInfo={setTableInfo}
              setTotalPosition={setTotalPosition}
              totalPosition={totalPosition}
              setTotalShares={setTotalShares}
            />
          ))}
        <Table.Row style={{ fontWeight: "1000", textAlign: "center" }}>
          <Table.Cell>Position Summary</Table.Cell>
          <Table.Cell>
            ${parseFloat(totalPosition / totalShares).toFixed(2)} (avg)
          </Table.Cell>
          <Table.Cell>{totalShares}</Table.Cell>
          <Table.Cell>${parseFloat(totalPosition).toFixed(2)}</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default PortfolioTable;
