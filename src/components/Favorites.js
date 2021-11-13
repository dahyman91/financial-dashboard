import React from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import GeneralNews from "./GeneralNews";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Cryptos from "./Cryptos";
import Metals from "./Metals";
import MarketOverviewWidget from "./MarketOverviewWidget";
import { Grid, Segment } from "semantic-ui-react";

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
  return (
    <>
      <Nav
        curPage={curPage}
        setCurPage={setCurPage}
        selectedTicker={selectedTicker}
        searchedTickers={searchedTickers}
      />

      <Ticker style={{ marginTop: "0" }} />

      <div style={{ margin: "0 5vw" }}>
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
          />
        </Grid>
        <Grid relaxed columns={3}>
          <Grid.Column width={5}>
            <GeneralNews />
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment style={{ backgroundColor: "ECB33E" }}>
              <Cryptos />
            </Segment>
            <Segment>
              <Metals />
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <MarketOverviewWidget />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default Favorites;
