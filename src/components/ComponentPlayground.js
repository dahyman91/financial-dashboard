import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Snapshot from "./Snapshot";
import Ticker from "./Ticker";
import Widget from "./Widget";
import TAWidget from "./TAWidget";
import CompanyNews from "./CompanyNews";
import StockDropdown from "./StockDropdown";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import API_KEY from "../API";
import PrimaryInfo from "./PrimaryInfo";

function ComponentPlayground({
  selectedTicker,
  setSelectedTicker,
  searchedTickers,
}) {
  const [companyMetrics, setCompanyMetrics] = useState([]);
  const date = new Date().toDateString();

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

  const params = useParams();

  useEffect(
    () => setSelectedTicker(params.selectedTicker),
    [selectedTicker, params.selectedTicker, setSelectedTicker]
  );

  return (
    <>
      <Nav />
      <Grid centered>
        <Grid.Column width={16}>
          <div style={{ height: "5vh", border: "1px solid #EDD193" }}>
            <Ticker />
          </div>
        </Grid.Column>
      </Grid>

      <Grid stackable centered>
        <Grid.Column floated="left" width={3}>
          <div
            style={{
              height: "5vh",
              margin: "3% 10% 0",
              textAlign: "center",
            }}
          >
            <StockDropdown
              searchedTickers={searchedTickers}
              setSelectedTicker={setSelectedTicker}
              selectedTicker={selectedTicker}
            />
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <div
            style={{
              height: "3vh",
              margin: "3% 20% 0",
              fontSize: "1.3rem",
              textAlign: "center",
            }}
          >
            {date}
          </div>
        </Grid.Column>
      </Grid>

      <Grid centered stackable columns={3}>
        <Grid.Column width={4}>
          <div
            style={{
              marginLeft: "5%",
              textAlign: "center",
            }}
          >
            <PrimaryInfo selectedTicker={selectedTicker} />
          </div>
        </Grid.Column>

        <Grid.Column width={8}>
          <div
            style={{
              height: "50vh",
            }}
          >
            <Widget selectedTicker={selectedTicker} />
          </div>
        </Grid.Column>

        <Grid.Column width={4}>
          <Snapshot companyMetrics={companyMetrics} />
        </Grid.Column>

        <Grid.Row style={{}}>
          <Grid.Column width={6}>
            <div>
              <TAWidget selectedTicker={selectedTicker} />
            </div>
          </Grid.Column>
          {/* <Grid.Column width={8}>
            <Grid.Row>
              <div style={{ height: "30vh" }}>
                <CompanyNews selectedTicker={selectedTicker} />
              </div>
            </Grid.Row>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default ComponentPlayground;
