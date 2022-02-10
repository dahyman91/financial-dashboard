import React, { useEffect, useState } from "react";
import API_KEY from "../API";
import { Table } from "semantic-ui-react";

function GeneralNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Market News:</h3>
      <Table
        celled
        style={{
          border: "1px solid #EDD193",
          filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {news[0] ? (
                <img
                  alt="img"
                  src={news[0].image}
                  style={{ maxWidth: "80px", borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {news[0] ? (
                  <a href={news[0].url} rel="noreferrer" target="_blank">
                    {news[0].headline}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{news[0] ? news[0].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {news[1] ? (
                <img
                  alt="img"
                  src={news[1].image}
                  style={{ maxWidth: "80px", borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {news[1] ? (
                  <a href={news[1].url} rel="noreferrer" target="_blank">
                    {" "}
                    {news[1].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{news[1] ? news[1].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {news[2] ? (
                <img
                  alt="img"
                  src={news[2].image}
                  style={{ maxWidth: "80px", borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {news[2] ? (
                  <a href={news[2].url} rel="noreferrer" target="_blank">
                    {" "}
                    {news[2].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{news[2] ? news[2].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {news[3] ? (
                <img
                  alt="img"
                  src={news[3].image}
                  style={{ maxWidth: "80px", borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {news[3] ? (
                  <a href={news[3].url} rel="noreferrer" target="_blank">
                    {" "}
                    {news[3].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{news[3] ? news[3].source : null}</h6>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {news[4] ? (
                <img
                  alt="img"
                  src={news[4].image}
                  style={{ maxWidth: "80px", borderRadius: "3px" }}
                />
              ) : null}
            </Table.Cell>
            <Table.Cell>
              <h4>
                {news[4] ? (
                  <a href={news[4].url} rel="noreferrer" target="_blank">
                    {" "}
                    {news[4].headline}{" "}
                  </a>
                ) : null}
              </h4>
            </Table.Cell>
            <Table.Cell>
              <h6>{news[5] ? news[5].source : null}</h6>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default GeneralNews;
