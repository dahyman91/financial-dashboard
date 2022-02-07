import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import API_KEY from "../API";

function CompanyNews({ selectedTicker }) {
  const [newsStories, setNewsStories] = useState([]);

  let date = new Date();

  const endDate =
    date.toLocaleDateString("en-US", { year: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { month: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { day: "numeric" });

  const startDate =
    date.toLocaleDateString("en-US", { year: "numeric" }) -
    1 +
    "-" +
    date.toLocaleDateString("en-US", { month: "numeric" }) +
    "-" +
    date.toLocaleDateString("en-US", { day: "numeric" });

  useEffect(() => {
    fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${selectedTicker}&from=${startDate}&to=${endDate}&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsStories(data);
      });
  }, [selectedTicker, startDate, endDate]);

  return (
    <div style={{ margin: "auto" }}>
      <h3 style={{ textAlign: "center" }}>Latest Company News:</h3>
      <Table
        unstackable
        style={{
          width: "100vw",
          border: "1px solid #EDD193",
          filter: "drop-shadow(1px 1px rgba(0,0,0,0.3))",
        }}
      >
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {newsStories[0] ? (
                <img
                  alt=""
                  src={newsStories[0].image}
                  style={{ borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {newsStories[0] ? (
                  <a href={newsStories[0].url} rel="noreferrer" target="_blank">
                    {" "}
                    {newsStories[0].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{newsStories[0] ? newsStories[0].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {newsStories[1] ? (
                <img
                  alt=""
                  src={newsStories[1].image}
                  style={{ borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {newsStories[1] ? (
                  <a href={newsStories[1].url} rel="noreferrer" target="_blank">
                    {" "}
                    {newsStories[1].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{newsStories[1] ? newsStories[1].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {newsStories[2] ? (
                <img
                  alt=""
                  src={newsStories[2].image}
                  style={{ borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {newsStories[2] ? (
                  <a href={newsStories[2].url} rel="noreferrer" target="_blank">
                    {" "}
                    {newsStories[2].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{newsStories[2] ? newsStories[2].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {newsStories[3] ? (
                <img
                  alt=""
                  src={newsStories[3].image}
                  style={{ borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {newsStories[3] ? (
                  <a href={newsStories[3].url} rel="noreferrer" target="_blank">
                    {" "}
                    {newsStories[3].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{newsStories[3] ? newsStories[3].source : null}</h6>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default CompanyNews;
