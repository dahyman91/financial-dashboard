import React from "react";

function Snapshot({ companyMetrics }) {
  //Snapshot
  //52 Week high
  const fiftyTwoWeekHigh = companyMetrics ? companyMetrics["52WeekHigh"] : null;
  //52 Week Low
  const fiftyTwoWeekLow = companyMetrics ? companyMetrics["52WeekLow"] : null;

  //marketCapitalization (need to format)
  const marketCapitalization = companyMetrics
    ? `$${companyMetrics.marketCapitalization}`
    : null;
  //dividendserShareAnnual
  const dividendPerShareAnnual = companyMetrics
    ? companyMetrics.dividendPerShareAnnual
    : null;

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
      <h2 style={{ paddingTop: "5%", fontSize: "1.2rem", textAlign: "center" }}>
        Snapshot
      </h2>
      <table className="ui table">
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
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        Annual Key Metrics
      </h2>
      <table className="ui table">
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

export default Snapshot;
