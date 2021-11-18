import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const StockDropdown = ({
  searchedTickers,
  setSelectedTicker,
  selectedTicker,
}) => {
  const history = useHistory();

  const stockOptions = [];
  searchedTickers.map((searchedTicker) => {
    const stock = {
      text: searchedTicker,
      value: searchedTicker,
    };
    stockOptions.push(stock);
    return null;
  });

  function handleChange(e, data) {
    history.push(`${data.value}`);
    setSelectedTicker(data.value);
  }
  return (
    <>
      <div className="ui container">
        <Dropdown
          onChange={handleChange}
          value={selectedTicker}
          fluid
          search
          selection
          options={stockOptions}
          style={{
            border: "1px solid #EDD193",
            filter: "drop-shadow(1px 1px rgba(0,0,0,0.1))",
          }}
        />
      </div>
    </>
  );
};

export default StockDropdown;

//{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
