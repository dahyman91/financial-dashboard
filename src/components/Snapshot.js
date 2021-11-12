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
  return (
    <>
      <h2 style={{ fontSize: "1.2rem", textAlign: "center" }}>Snapshot</h2>
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
    </>
  );
}

export default Snapshot;
