import React from "react";

function KeyMetrics({ companyMetrics }) {
  //Key metrics
  // Price-to-Earnings Ratio (Normalized, annual)
  const priceToEarning = companyMetrics
    ? companyMetrics["peNormalizedAnnual"]
    : null;
  // Price-to-Book Ratio
  const bookValuePerShareAnnual = companyMetrics
    ? companyMetrics["bookValuePerShareAnnual"]
    : null;
  // Debt-to-Equity Ratio (Annual)
  const debtToEquity = companyMetrics
    ? companyMetrics["totalDebt/totalEquityAnnual"]
    : null;
  // Free Cash Flow (Annual)
  const freeCashFlow = companyMetrics
    ? companyMetrics["freeCashFlowAnnual"]
    : null;

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        Annual Key Metrics
      </h2>
      <table className="ui table" style={{ width: "500px" }}>
        <tbody>
          <tr>
            <td>Price-to-Earnings </td>
            <td>{priceToEarning}</td>
          </tr>
          <tr>
            <td>Book/Share</td>
            <td>{bookValuePerShareAnnual}</td>
          </tr>
          <tr>
            <td>Debt/Equity</td>
            <td>{debtToEquity}</td>
          </tr>
          <tr>
            <td>FCF ( M)</td>
            <td>${freeCashFlow}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default KeyMetrics;
