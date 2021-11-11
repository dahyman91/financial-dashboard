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

  const match = useRouteMatch();
  const params = useParams();

  // console.log(params.selectedTicker);

  useEffect(() => setSelectedTicker(params.selectedTicker), []);

  return (
    <>
      <Nav />
      <Grid>
        <Grid.Column width={16}>
          <div style={{ height: "5vh" }}>
            <Ticker />
          </div>
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column floated="left" width={5}>
          <div style={{ height: "5vh" }}>
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

      <Grid stackable columns={4}>
        <Grid.Column width={3}>
          <div
            style={{
              height: "30vh",
              border: "1px solid black",
              marginTop: "10%",
            }}
          >
            <PrimaryInfo selectedTicker={selectedTicker} />
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div style={{ height: "30vh", marginTop: "10%" }}>
            <Snapshot companyMetrics={companyMetrics} />
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div style={{ height: "30vh", marginTop: "10%" }}>
            <KeyMetrics companyMetrics={companyMetrics} />
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div
            style={{
              height: "45vh",
              // marginLeft: "20%",
              // border: "1px solid black",
              // textAlign: "center",
            }}
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          >
            <TAWidget selectedTicker={selectedTicker} />
          </div>
        </Grid.Column>

        <Grid.Row>
          <Grid.Column width={8}>
            <div style={{ height: "65vh" }}>
              <Widget selectedTicker={selectedTicker} />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid.Row>
              <div style={{ height: "30vh" }}>
                <CompanyNews selectedTicker={selectedTicker} />
              </div>
            </Grid.Row>
            <Grid.Row>
              <Grid stackable relaxed columns={2}>
                <Grid.Column>
                  <div
                    style={{
                      marginTop: "3vh",
                      height: "40vh",
                      border: "1px solid red",
                    }}
                  ></div>
                </Grid.Column>
                <Grid.Column>
                  <div
                    style={{
                      marginTop: "3vh",
                      height: "30vh",
                      border: "1px solid black",
                    }}
                  >
                    TBD
                  </div>
                </Grid.Column>
              </Grid>
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
