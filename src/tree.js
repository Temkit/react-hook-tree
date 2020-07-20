import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { init, deleteItem, addItem, editItem, makeChild } from "./dataServices";
import PropTypes from "prop-types";
import styles from "./styles/tree.css";

const Tree = ({
  treeData,
  lang,
  checkbox,
  count,
  node,
  iconType,
  style,
  lineStyle,
  iconStyle,
  compact,
  add,
  edit,
  remove,
  debug,
  onChange,
}) => {
  const [expanded, setExpanded] = useState({});
  const [data, setData] = useState(treeData);
  const [modal, setModal] = useState("none");

  init(data, setData, modal, setModal, expanded, setExpanded);

  useEffect(() => {
    if (onChange) {
      onChange(data);
    }
  }, [data]);

  return (
    <>
      {data && data.tree && data.tree.length > 0 && (
        <ul
          style={{
            direction: lang && lang.rtl ? "rtl" : "ltr",
            ...style,
            marginTop: 30,
          }}
          className={`${styles.yetMyUL}  ${styles.ul}`}
          id="yet-myUL"
        >
          {data.tree.map((child) =>
            makeChild(
              checkbox,
              child,
              style,
              lineStyle,
              compact,
              lang,
              iconType,
              iconStyle,
              count,
              add,
              edit,
              remove
            )
          )}
        </ul>
      )}

      <Modal
        type={modal}
        deleteItem={deleteItem}
        editItem={editItem}
        addItem={addItem}
        lang={lang && lang.modal}
        rtl={lang && lang.rtl}
        attributes={node}
      />
    </>
  );
};

Tree.defaultProps = {
  treeData: {
    tree: [],
  },
  lang: {
    modal: {
      add: {
        title: "Add Modal",
        warning: "Check carfully your data before saving !",
        content: "You are Adding the %1 node",
        button: "save",
      },
      edit: {
        title: "Edit Modal",
        warning: "Check carfully your data before saving !",
        content: "You are editing the %%% node",
        button: "save",
      },
      delete: {
        title: "Are you absolutely sure?",
        warning: "Unexpected bad things will happen if you don’t read this!",
        content:
          "This action cannot be undone. This will permanently delete the %%%, and remove all children associations. Please type confirmed to delete.",
        confirmation: "please type %%% to delete",
        verification: "confirm",
        button: "delete this node",
      },
    },
  },
  checkbox: false,
  count: false,
  compact: false,
  edit: false,
  add: false,
  remove: false,
};

Tree.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  treeData: PropTypes.object.isRequired,
  /** button label. */
  lang: PropTypes.object.isRequired,
  /** onClick handler */
  checkbox: PropTypes.bool,
  count: PropTypes.bool,
  /** component styles */
  compact: PropTypes.bool,
  /** component edit */
  edit: PropTypes.bool,
  /** component edit */
  add: PropTypes.bool,
  /** component remove */
  remove: PropTypes.bool,
  /** component Get data */
  onChange: PropTypes.func,
};

export default Tree;
