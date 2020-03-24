import React, { useEffect, useState } from "react";
import FormElement from "./formElement";
import DeleteModal from "./modal/delete";
import EditModal from "./modal/edit";

const Modal = ({ type, attributes, lang, rtl, deleteItem, editItem }) => {
  const [show, setShow] = useState(null);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    let op = Object.keys(type)[0];
    setOperation(op);

    if (op.startsWith("edit")) {
      setShow("edit");
    } else if (op.startsWith("delete")) {
      setShow("delete");
    }
  }, [type]);

  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: (show === "edit" || show === "delete") && "block" }}
    >
      {show === "edit" ? (
        <EditModal
          object={type[operation]}
          editItem={editItem}
          attributes={attributes}
          setShow={setShow}
          lang={lang.edit}
          rtl={rtl}
        />
      ) : show === "delete" ? (
        <DeleteModal
          object={type[operation]}
          deleteItem={deleteItem}
          setShow={setShow}
          lang={lang.delete}
          rtl={rtl}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default Modal;
