import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { init, makeChild, deleteItem, editItem } from "./dataServices";
import PropTypes from "prop-types";
import "./styles/tree.css";

const Tree = ({
  treeData,
  lang,
  count,
  node,
  iconType,
  style,
  lineStyle,
  iconStyle,
  compact,
  actions,
  onChange
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
            marginTop: 30
          }}
          id="yet-myUL"
        >
          {data.tree.map(child =>
            makeChild(
              child,
              style,
              lineStyle,
              compact,
              lang,
              iconType,
              iconStyle,
              count,
              actions
            )
          )}
        </ul>
      )}

      <Modal
        type={modal}
        deleteItem={deleteItem}
        editItem={editItem}
        lang={lang && lang.modal}
        rtl={lang && lang.rtl}
        attributes={node}
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
  treeData: PropTypes.object.isRequired,
  /** button label. */
  lang: PropTypes.object.isRequired,
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
