import React from "react";
import Icon from "./icon";
import flatten from "flat";
import styles from "./styles/tree.css";
import iconStyles from "./styles/icon.css";

var data__;
var setData__;
var modal__;
var setModal__;
var expanded__;
var setExpanded__;

const init = (data, setData, modal, setModal, expanded, setExpanded) => {
  data__ = data;
  setData__ = setData;

  modal__ = modal;
  setModal__ = setModal;

  expanded__ = expanded;
  setExpanded__ = setExpanded;
};

const makeChild = (
  child,
  style,
  lineStyle,
  compact,
  lang,
  iconType,
  iconStyle,
  count,
  edit,
  remove
) => {
  return (
    <li key={child._id} id={child._id} style={{ ...lineStyle }}>
      <span
        onClick={() =>
          child.children &&
          child.children.length > 0 &&
          checkExpanded(child._id)
        }
        className={`${styles.li} `}
        style={{ padding: compact ? 0 : 12 }}
      >
        <Icon
          rtl={lang && lang.rtl}
          direction={expanded__[child._id] ? "down" : "right"}
          type={iconType}
          hasChildren={child.children && child.children.length > 0}
          style={{ ...iconStyle }}
        />
        <span> {child.item.name}</span>
        {count && (
          <span className={styles.yetCount}>
            [
            {child.children && child.children.length
              ? child.children.length
              : 0}
            ]
          </span>
        )}
        <span style={{ flex: 1 }} />

        {edit && (
          <div className={iconStyles.edit}>
            <img
              src={require("./icons/edit.png").default}
              className={`${iconStyles.ripple} ${iconStyles.editimg}`}
              alt="edit"
              onClick={e => {
                e.stopPropagation();
                let modalItem = {};
                modalItem["edit" + Math.random()] = child;
                setModal__(modalItem);
              }}
            />
          </div>
        )}
        {remove && (
          <div className={iconStyles.remove}>
            <img
              src={require("./icons/delete.png").default}
              className={`${iconStyles.ripple} ${iconStyles.removeimg}`}
              alt="delete"
              onClick={e => {
                e.stopPropagation();
                let modalItem = {};
                modalItem["delete" + Math.random()] = child;
                setModal__(modalItem);
              }}
            />
          </div>
        )}
      </span>
      {child.children && child.children.length > 0 && (
        <ul
          className={styles.ul}
          style={{
            display: expanded__[child._id] ? "block" : "none",
            ...style
          }}
        >
          {child.children.map(child2 =>
            makeChild(
              child2,
              style,
              lineStyle,
              compact,
              lang,
              iconType,
              iconStyle,
              count,
              edit,
              remove
            )
          )}
        </ul>
      )}
    </li>
  );
};

const deleteItem = item => {
  let bifFlat = flatten.flatten(data__.tree);
  let smallFlat = flatten.flatten(item);

  for (let i in smallFlat) {
    for (let j in bifFlat) {
      if (
        j.replace(/^[0-9]+\./, "") === i &&
        JSON.stringify(smallFlat[i]) === JSON.stringify(bifFlat[j])
      ) {
        delete bifFlat[j];
      }
    }
  }

  let tmp = flatten.unflatten(bifFlat);
  let d = {};
  let mainArray = [];

  Object.keys(tmp).forEach(key => {
    mainArray.push(tmp[key]);
  });

  d.tree = mainArray;

  setData__(d);
};

const editItem = item => {
  let mainArray = changeData(data__.tree, item);
  let d = {};
  d.tree = mainArray;
  console.log(d);
  setData__(d);
};

const checkExpanded = id => {
  let tmpexpanded = { ...expanded__ };
  tmpexpanded[id] = tmpexpanded[id] ? !tmpexpanded[id] : true;

  setExpanded__({ ...tmpexpanded });
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

export { init, deleteItem, editItem, makeChild };
