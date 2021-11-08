import React from "react";
import BasicFinancials from "./BasicFinancials";

function ComponentPlayground() {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        position: "absolute",
        width: "100%",
        top: "50%",
      }}
    >
      <BasicFinancials />
    </div>
  );
}

export default ComponentPlayground;
