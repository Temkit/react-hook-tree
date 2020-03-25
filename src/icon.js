import React, { useEffect, useState } from "react";

const Icon = ({ direction, type, rtl, hasChildren, style }) => {
  if (type && type === "folder" && hasChildren) {
    direction = "";
    type = "folder-full";
  } else if (type && type === "folder" && !hasChildren) {
    direction = "";
    type = "folder-colored";
  } else if (type && Array.isArray(type)) {
    type = "-" + type.join("-");
  } else {
    type = "";
  }

  return (
    <img
      src={require("./icons/" + direction + type + ".png").default}
      className={`ripple ${
        !hasChildren && !type.includes("folder") ? "disabled" : ""
      } ${type.includes("folder") ? "folderIcon" : ""}`}
      style={{ transform: rtl ? "scaleX(-1)" : "scaleX(1)", ...style }}
    />
  );
};

export default Icon;
