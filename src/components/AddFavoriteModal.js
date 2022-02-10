import React from "react";
import Option from "./Option";
import { Table, Modal, Message, Button, Icon } from "semantic-ui-react";

function AddFavoriteModal({
  open,
  setOpen,
  elements,
  setLoading,
  setErr,
  setHeader,
  setSelectedTicker,
  setCompanyDetails,
  searchedTickers,
  setSearchedTickers,
  setElements,
}) {
  const uniqueSymbols = [...new Set(elements.map((item) => item.symbol))];

  function symbolToElement(symbol) {
    return elements.find((obj) => obj.symbol === symbol);
  }

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      dimmer="blurring"
    >
      {elements[0] ? (
        uniqueSymbols.map((symbol) => {
          return (
            <Table padded>
              <Table.Body>
                <Option
                  element={symbolToElement(symbol)}
                  setLoading={setLoading}
                  setErr={setErr}
                  setHeader={setHeader}
                  setSelectedTicker={setSelectedTicker}
                  setCompanyDetails={setCompanyDetails}
                  searchedTickers={searchedTickers}
                  setSearchedTickers={setSearchedTickers}
                  setElements={setElements}
                  setOpen={setOpen}
                />
              </Table.Body>
            </Table>
          );
        })
      ) : (
        <div>
          <Message color="red" info>
            <Message.Header style={{ textAlign: "center" }}>
              Stock Not Included in Database
              <Button
                onClick={() => setOpen(false)}
                icon
                style={{ position: "fixed", right: "5px", top: "7px" }}
              >
                <Icon color="black" name="window close" />
              </Button>
            </Message.Header>
          </Message>
        </div>
      )}
    </Modal>
  );
}

export default AddFavoriteModal;
