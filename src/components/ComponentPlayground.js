import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import KeyMetrics from "./KeyMetrics";
import Snapshot from "./Snapshot";
import Ticker from "./Ticker";
import Widget from "./Widget";
import TAWidget from "./TAWidget";
import CompanyNews from "./CompanyNews";
import StockDropdown from "./StockDropdown";
import { useParams, useRouteMatch } from "react-router-dom";
import { Grid, Tab } from "semantic-ui-react";
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

  useEffect(() => setSelectedTicker(params.selectedTicker), [selectedTicker]);

  return (
    <>
      <Nav />
      <Grid centered>
        <Grid.Column width={16}>
          <div style={{ height: "5vh" }}>
            <Ticker />
          </div>
        </Grid.Column>
      </Grid>

      <Grid centered>
        <Grid.Column floated="left" width={3}>
          <div style={{ height: "5vh", marginLeft: "40%" }}>
            <StockDropdown
              searchedTickers={searchedTickers}
              setSelectedTicker={setSelectedTicker}
              selectedTicker={selectedTicker}
            />
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <div style={{ height: "5vh" }}>{date}</div>
        </Grid.Column>
      </Grid>

      <Grid centered stackable columns={3}>
        <Grid.Column width={4}>
          <div
            style={{
              height: "55vh",
              marginLeft: "10%",
            }}
          >
            <PrimaryInfo selectedTicker={selectedTicker} />
          </div>
        </Grid.Column>

        <Grid.Column width={8}>
          <div
            style={{
              height: "40vh",
              marginRight: "50%",
            }}
          >
            <Widget
              // style={{ height: "40vh" }}
              selectedTicker={selectedTicker}
            />
          </div>
        </Grid.Column>

        <Grid.Column floated="left" width={4} style={{}}>
          <div
            style={{
              height: "40vh",
              borderRadius: "1%",
              width: "100%",
            }}
          >
            <Snapshot companyMetrics={companyMetrics} />{" "}
          </div>
        </Grid.Column>

        <Grid.Row style={{}}>
          <Grid.Column width={6}>
            <div>
              <TAWidget selectedTicker={selectedTicker} />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid.Row>
              <div style={{ height: "30vh" }}>
                <CompanyNews selectedTicker={selectedTicker} />
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <StockDropdown
        searchedTickers={searchedTickers}
        setSelectedTicker={setSelectedTicker}
      />
      <div
        style={{
          width: "100%",
        }}
      >
        {selectedTicker ? (
          <BasicFinancials selectedTicker={selectedTicker} />
        ) : null}
        <Widget selectedTicker={selectedTicker} />
      </div> */}
    </>
  );
}

export default ComponentPlayground;
