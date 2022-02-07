import React from "react";
import { Table } from "semantic-ui-react";

function Snapshot({ companyMetrics }) {
  const fiftyTwoWeekHigh = companyMetrics ? companyMetrics["52WeekHigh"] : null;
  const fiftyTwoWeekLow = companyMetrics ? companyMetrics["52WeekLow"] : null;
  const marketCapitalization = companyMetrics
    ? `$${companyMetrics.marketCapitalization}`
    : null;
  const dividendPerShareAnnual = companyMetrics
    ? companyMetrics.dividendPerShareAnnual
    : null;

  const priceToEarning = companyMetrics
    ? companyMetrics["peNormalizedAnnual"]
    : null;
  const bookValuePerShareAnnual = companyMetrics
    ? companyMetrics["bookValuePerShareAnnual"]
    : null;
  const debtToEquity = companyMetrics
    ? companyMetrics["totalDebt/totalEquityAnnual"]
    : null;
  const freeCashFlow = companyMetrics
    ? companyMetrics["freeCashFlowAnnual"]
    : null;

  return (
    <Table
      style={{
        width: "100%",
        marginRight: "5%",
        border: "1px solid #EDD193",
        filter: "drop-shadow(1px 1px rgba(0,0,0,0.1))",
      }}
      unstackable
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Valuation Measure</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>52 Week High</Table.Cell>
          <Table.Cell>{fiftyTwoWeekHigh}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>52 Week Low</Table.Cell>
          <Table.Cell>{fiftyTwoWeekLow}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Market Capitalization (M)</Table.Cell>
          <Table.Cell>{marketCapitalization}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Dividends per Share (Annual)</Table.Cell>
          <Table.Cell>
            {dividendPerShareAnnual ? dividendPerShareAnnual : "None"}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Book Value per Share</Table.Cell>
          <Table.Cell>{bookValuePerShareAnnual}</Table.Cell>
        </Table.Row>
        {priceToEarning && (
          <Table.Row>
            <Table.Cell>Price-to-Earnings Ratio</Table.Cell>
            <Table.Cell>{priceToEarning}</Table.Cell>
          </Table.Row>
        )}
        <Table.Row>
          <Table.Cell>Debt-to-Equity Ratio</Table.Cell>
          <Table.Cell>{debtToEquity}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Free Cash Flow (M)</Table.Cell>
          <Table.Cell>{freeCashFlow}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default Snapshot;
