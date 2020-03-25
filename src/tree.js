import React, { useEffect, useState } from "react";
import Icon from "./icon";
import Modal from "./modal";
import flatten from "flat";
import PropTypes from "prop-types";
import "./styles/tree.css";

const Tree = ({
  treeData,
  lang,
  count,
  itemAttributes,
  iconType,
  style,
  lineStyle,
  iconStyle,
  compact,
  actions,
  onChange
}) => {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState("none");
  const [data, setData] = useState("none");

  useEffect(() => {
    setData(treeData);
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(data);
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
            rtl={lang && lang.rtl}
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
          {actions && (
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
        <ul
          style={{
            direction: lang && lang.rtl ? "rtl" : "ltr",
            ...style,
            marginTop: 30
          }}
          id="yet-myUL"
        >
          {data.tree.map(child => makeChild(child))}
        </ul>
      )}

      <Modal
        type={modal}
        deleteItem={deleteItem}
        editItem={editItem}
        lang={lang && lang.modal}
        rtl={lang && lang.rtl}
        attributes={itemAttributes}
      />
    </>
  );
};

Tree.defaultProps = {
  treeData: {
    tree: []
  },
  lang: {
    modal: {
      edit: {
        title: "Edit Modal",
        warning: "Check carfully your data before saving !",
        content: "You are editing the %1 node",
        button: "save"
      },
      delete: {
        title: "Are you absolutely sure?",
        warning: "Unexpected bad things will happen if you don’t read this!",
        content:
          "This action cannot be undone. This will permanently delete the %1, and remove all children associations. Please type confirmed to delete.",
        confirmation: "please type %1 to delete",
        verification: "confirm",
        button: "delete this node"
      }
    }
  },
  count: false,
  compact: false,
  actions: false
};

Tree.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  treeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** button label. */
  lang: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** onClick handler */
  count: PropTypes.bool,
  /** component styles */
  compact: PropTypes.bool,
  /** component Actions */
  actions: PropTypes.bool,
  /** component Get data */
  onChange: PropTypes.func
};

export default Tree;
