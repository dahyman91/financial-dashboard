import React from "react";
import Option from "./Option";
import { Button, Header, Table, Modal } from "semantic-ui-react";
import validateData from "json-server/lib/server/router/validate-data";

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
        elements.map((element) => {
          console.log(element);
          return (
            <Table celled padded>
              <Table.Body>
                <Option
                  element={element}
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
          <p>no results</p>
        </div>
      )}
    </Modal>
  );
}

export default AddFavoriteModal;
