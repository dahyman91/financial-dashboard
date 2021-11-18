import React, { useState, useEffect } from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import GeneralNews from "./GeneralNews";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Cryptos from "./Cryptos";
import Metals from "./Metals";
import MarketOverviewWidget from "./MarketOverviewWidget";
import { Grid, Segment } from "semantic-ui-react";
import PortfolioTable from "./PortfolioTable";
import PieChart from "./PieChart";

function Favorites({
  setSearchedTickers,
  searchedTickers,
  companyDetails,
  setSelectedTicker,
  setCompanyDetails,
  curPage,
  setCurPage,
  selectedTicker,
}) {
  const [tableInfo, setTableInfo] = useState([]);
  

  useEffect(() => {
    fetch("https://shrouded-cliffs-39592.herokuapp.com/tableData")
      .then((res) => res.json())
      .then((data) => {
        setTableInfo(data);
      });
  }, []);

  return (
    <>
      <Nav
        curPage={curPage}
        setCurPage={setCurPage}
        selectedTicker={selectedTicker}
        searchedTickers={searchedTickers}
      />
      <div style={{ height: "46px" }}>
        <Ticker style={{ marginTop: "0" }} />
      </div>

      <div style={{ margin: "0 2vw" }}>
        <Grid columns={1}>
          <Grid.Column>
            <Search
              setSearchedTickers={setSearchedTickers}
              searchedTickers={searchedTickers}
              companyDetails={companyDetails}
              setCompanyDetails={setCompanyDetails}
              setSelectedTicker={setSelectedTicker}
            />
          </Grid.Column>
        </Grid>
        <Grid relaxed columns={6}>
          <CardContainer
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
            setSearchedTickers={setSearchedTickers}
            curPage={curPage}
          />
        </Grid>
        <Grid relaxed columns={2}>
          <Grid.Column width={8}>
            <PortfolioTable tableInfo={tableInfo} />
          </Grid.Column>
          <Grid.Column
            width={7}
            style={{ marginLeft: "3%", border: "1px solid black" }}
          ></Grid.Column>
        </Grid>
        <Grid stackable columns={3} style={{ margin: "3% 1%" }}>
          <Grid.Column width={6}>
            <GeneralNews />
          </Grid.Column>

          <Grid.Column
            width={4}
            style={{ marginLeft: "3vw", marginRight: "3vw" }}
          >
            <h3 style={{ textAlign: "center" }}>Alternative Markets</h3>
            <Segment
              style={{
                backgroundColor: "ECB33E",
                border: "1px solid #EDD193",
                filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
              }}
            >
              <Cryptos style={{ textAlign: "center" }} />
            </Segment>
            <Segment
              style={{
                backgroundColor: "gold",
                border: "1px solid #EDD193",
                filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
              }}
            >
              <Metals />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <h3 style={{ textAlign: "center", color: "#faf9f6" }}>HIRE US</h3>
            <MarketOverviewWidget />
          </Grid.Column>
        </Grid>
        <PieChart tableInfo={tableInfo} />
      </div>
    </>
  );
}

export default Favorites;
