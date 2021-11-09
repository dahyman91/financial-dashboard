import React, { useEffect } from "react";

function Ticker() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = {
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "BTC/USD",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "ETH/USD",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        {/* <div class="tradingview-widget-copyright">
          <a href="https://www.tradingview.com" rel="noopener" target="_blank"> */}
        {/* <span class="blue-text">Ticker Tape</span>
        {/* </a>{" "} */}
        {/* by TradingView */}
        {/* </div>  */}
      </div>
    </>
  );
}

export default Ticker;
