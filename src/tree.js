import React, { useEffect, useState } from "react";
import Icon from "./icon";
import "./styles/tree.css";

const Tree = ({ treeData, iconType, count, style, lineStyle, iconStyle }) => {
  const [active, setActive] = useState(false);

  const checkActive = id => {
    let tmpactive = { ...active };
    tmpactive[id] = tmpactive[id] ? !tmpactive[id] : true;
    setActive(tmpactive);
  };

  const makeChild = child => {
    return (
      <li key={child._id} id={child._id} style={{ ...lineStyle }}>
        <span
          onClick={() =>
            child.children &&
            child.children.length > 0 &&
            checkActive(child._id)
          }
          className="li"
        >
          <Icon
            direction={active[child._id] ? "down" : "right"}
            type={iconType}
            hasChildren={child.children && child.children.length > 0}
            style={{ ...iconStyle }}
          />
          <span> {child.item.name}</span>
          {count && (
            <span className="yet-count">
              [
              {child.children && child.children.length
                ? child.children.length
                : 0}
              ]
            </span>
          )}
        </span>
        {child.children && child.children.length > 0 && (
          <ul
            style={{ display: active[child._id] ? "block" : "none", ...style }}
          >
            {child.children.map(child2 => makeChild(child2))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {treeData && treeData.tree && treeData.tree.length > 0 && (
        <ul style={{ ...style }} id="yet-myUL">
          {treeData.tree.map(child => makeChild(child))}
        </ul>
      )}
    </>
  );
};

export default Tree;
