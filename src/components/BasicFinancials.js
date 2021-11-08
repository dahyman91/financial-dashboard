import React, { useState, useEffect } from "react";
import API_KEY from "../API";

function BasicFinancials({ selectedTicker }) {
  const [companyMetrics, setCompanyMetrics] = useState({});

  useEffect(
    () =>
      fetch(
        `https://finnhub.io/api/v1/stock/metric?symbol=${selectedTicker}&metric=all&token=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCompanyMetrics(data.metric);
        }),
    [selectedTicker]
  );

  //Snapshot
  //52 Week high
  const fiftyTwoWeekHigh = companyMetrics["52WeekHigh"];
  //52 Week Low
  const fiftyTwoWeekLow = companyMetrics["52WeekLow"];
  //marketCapitalization (need to format)
  const marketCapitalization = `$${companyMetrics.marketCapitalization}`;
  //dividendserShareAnnual
  const dividendPerShareAnnual = companyMetrics.dividendPerShareAnnual;

  //Key metrics
  // Price-to-Earnings Ratio (Normalized, annual)
  const priceToEarning = companyMetrics["peNormalizedAnnual"];
  // Price-to-Book Ratio
  const bookValuePerShareAnnual = companyMetrics["bookValuePerShareAnnual"];
  // Debt-to-Equity Ratio (Annual)
  const debtToEquity = companyMetrics["totalDebt/totalEquityAnnual"];
  // Free Cash Flow (Annual)
  const freeCashFlow = companyMetrics["freeCashFlowAnnual"];

  return (
    <>
      <div className="ui container" style={{ width: "50%" }}>
        <h2 style={{ textAlign: "center" }}>Snapshot</h2>
        <table className="ui table">
          <thead>
            <tr>
              <th className="ten wide">Metric</th>
              <th className="six wide">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>52 Week High</td>
              <td>${fiftyTwoWeekHigh}</td>
            </tr>
            <tr>
              <td>52 Week Low</td>
              <td>${fiftyTwoWeekLow}</td>
            </tr>
            <tr>
              <td>Total Market Capitalization</td>
              <td>{marketCapitalization}</td>
            </tr>
            <tr>
              <td>Dividends per Share (Annual)</td>
              <td>${dividendPerShareAnnual}</td>
            </tr>
          </tbody>
        </table>
        <h2 style={{ textAlign: "center" }}>Key Metrics</h2>
        <table className="ui table">
          <thead>
            <tr>
              <th className="ten wide">Metric</th>
              <th className="six wide">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price-to-Earnings Ratio</td>
              <td>{priceToEarning}</td>
            </tr>
            <tr>
              <td>Book Value Per Share (Annual)</td>
              <td>{bookValuePerShareAnnual}</td>
            </tr>
            <tr>
              <td>Debt-to-Equity Ration (Annual)</td>
              <td>{debtToEquity}</td>
            </tr>
            <tr>
              <td>Free Cash Flow (Annual, M)</td>
              <td>${freeCashFlow}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BasicFinancials;
