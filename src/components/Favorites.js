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
        <h3
          style={{
            width: "10%",
            margin: "1.5% auto 2% auto",
            textAlign: "center",
          }}
        >
          Followed Stocks
        </h3>
        <Grid relaxed columns={6}>
          <CardContainer
            searchedTickers={searchedTickers}
            companyDetails={companyDetails}
            setCompanyDetails={setCompanyDetails}
            setSelectedTicker={setSelectedTicker}
            setSearchedTickers={setSearchedTickers}
            curPage={curPage}
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
          />
        </Grid>

        {tableInfo[0] ? (
          <Grid relaxed columns={2}>
            <Grid.Column width={8}>
              <PortfolioTable
                tableInfo={tableInfo}
                setTableInfo={setTableInfo}
              />
            </Grid.Column>
            <Grid.Column width={7} style={{}}>
              <PieChart tableInfo={tableInfo} />
            </Grid.Column>
          </Grid>
        ) : (
          <h3
            style={{
              border: "1px solid #EDD193",
              filter: "drop-shadow(1px 1px rgba(0,0,0,0.5))",
              background: "white",
              padding: "10px",
              width: "20%",
              margin: "3% auto 0 auto",
              textAlign: "center",
            }}
          >
            Use Green Buttons to Add Stocks to Portfolio
          </h3>
        )}

        <Grid stackable columns={3} style={{ margin: "1.5% 1%" }}>
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
      </div>
      <footer>
        <div
          className="ui vertical footer segment"
          style={{
            backgroundColor: "white",
            color: "white",
            borderTop: "2px solid #EDD193",
          }}
        >
          <div
            className="ui container"
            style={{
              justifyContent: "space-between",
              width: "80%",
              display: "flex",
            }}
          >
            <a href="#" style={{ cursor: "pointer", color: "black" }}>
              ben-jackson.com
            </a>
            <a href="#" style={{ cursor: "pointer", color: "black" }}>
              dan-hyman.com
            </a>
            <a href="#" style={{ cursor: "pointer", color: "black" }}>
              andrew-busel.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Favorites;
