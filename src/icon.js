import React, { useEffect, useState } from "react";

const Icon = ({ direction, type, hasChildren, style }) => {
  return (
    direction &&
    direction.length > 0 && (
      <img
        src={
          require("./icons/" +
            direction +
            (type && type.length > 0 ? "-" + type.join("-") : "") +
            ".png").default
        }
        className={`ripple ${!hasChildren ? "disabled" : ""}`}
        style={{ ...style }}
      />
    )
  );
};

export default Icon;
