import React, { useEffect, useState } from "react";
import Icon from "./icon";
import Modal from "./modal";
import flatten from "flat";
import "./styles/tree.css";

const Tree = ({
  treeData,
  count,
  itemAttributes,
  iconType,
  style,
  lineStyle,
  iconStyle,
  compact,
  showActions,
  getData
}) => {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState("none");
  const [data, setData] = useState("none");

  useEffect(() => {
    setData(treeData);
  }, []);

  useEffect(() => {
    if (getData) {
      getData(data);
    }
  }, [data]);

  const deleteItem = item => {
    let bifFlat = flatten.flatten(data.tree);
    let smallFlat = flatten.flatten(item);

    Object.keys(smallFlat).map(smallKey => {
      Object.keys(bifFlat).map(bigKey => {
        if (
          bigKey.includes(smallKey) &&
          bifFlat[bigKey] === smallFlat[smallKey]
        ) {
          delete bifFlat[bigKey];
        }
      });
    });

    let tmp = flatten.unflatten(bifFlat);
    let d = {};
    let mainArray = [];

    Object.keys(tmp).forEach(key => {
      mainArray.push(tmp[key]);
    });

    d.tree = mainArray;

    setData(d);
  };

  const changeData = (data, item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === item._id) {
        data[i] = item;
      } else if (data[i].children.length > 0) {
        data[i].children = changeData(data[i].children, item);
      }
    }

    return data;
  };

  const editItem = item => {
    let bifFlat = flatten.flatten(data.tree);

    let mainArray = changeData(data.tree, item);
    let d = {};
    d.tree = mainArray;

    setData(d);
  };

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
          className="li "
          style={{ padding: compact ? 0 : 12 }}
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
          <span style={{ flex: 1 }} />
          {showActions && (
            <div className="actions">
              <img
                src={require("./icons/edit.png").default}
                className="ripple"
                alt="edit"
                onClick={e => {
                  e.stopPropagation();
                  let modalItem = {};
                  modalItem["edit" + Math.random()] = child;
                  setModal(modalItem);
                }}
              />
              <img
                src={require("./icons/delete.png").default}
                className="ripple"
                alt="delete"
                onClick={e => {
                  e.stopPropagation();
                  let modalItem = {};
                  modalItem["delete" + Math.random()] = child;
                  setModal(modalItem);
                }}
              />
            </div>
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
      {data && data.tree && data.tree.length > 0 && (
        <ul style={{ ...style }} id="yet-myUL">
          {data.tree.map(child => makeChild(child))}
        </ul>
      )}

      <Modal
        type={modal}
        deleteItem={deleteItem}
        editItem={editItem}
        attributes={itemAttributes}
      />
    </>
  );
};

export default Tree;
