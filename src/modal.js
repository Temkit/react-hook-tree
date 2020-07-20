import React, { useEffect, useState } from "react";
import FormElement from "./formElement";
import DeleteModal from "./modal/delete";
import EditModal from "./modal/edit";
import AddModal from "./modal/add";
import modalStyles from "./styles/modal.css";

const Modal = ({
  type,
  attributes,
  lang,
  rtl,
  deleteItem,
  editItem,
  addItem,
}) => {
  const [show, setShow] = useState(null);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    let op = Object.keys(type)[0];
    setOperation(op);

    if (op.startsWith("edit")) {
      setShow("edit");
    } else if (op.startsWith("delete")) {
      setShow("delete");
    } else if (op.startsWith("add")) {
      setShow("add");
    }
  }, [type]);

  return (
    <div
      id="myModal"
      className={modalStyles.modal}
      style={{
        display:
          (show === "edit" || show === "delete" || show === "add") && "block",
      }}
    >
      {show === "edit" && (
        <EditModal
          object={type[operation]}
          editItem={editItem}
          attributes={attributes}
          setShow={setShow}
          lang={lang.edit}
          rtl={rtl}
        />
      )}
      {show === "delete" && (
        <DeleteModal
          object={type[operation]}
          deleteItem={deleteItem}
          setShow={setShow}
          lang={lang.delete}
          rtl={rtl}
        />
      )}
      {show === "add" && (
        <AddModal
          object={type[operation]}
          addItem={addItem}
          attributes={attributes}
          setShow={setShow}
          lang={lang.add}
          rtl={rtl}
        />
      )}
    </div>
  );
};

export default Modal;
