import React, { useEffect, useState } from "react";
import FormElement from "./../formElement";

const DeleteModal = ({ object, lang, rtl, deleteItem, setShow }) => {
  const [val, setVal] = useState("");

  return (
    <div className="modal-content" style={{ direction: rtl ? "rtl" : "ltr" }}>
      <div className="modal-header">
        <span
          className="close"
          style={{ float: rtl ? "left" : "right" }}
          onClick={() => setShow(false)}
        >
          &times;
        </span>
        <h2 className="h2">{lang.title}</h2>
        <div className="warinig">{lang.warning}</div>
      </div>
      <div className="modal-body">
        <p>
          {object &&
            object.item &&
            lang.content.replace("%%%", object.item.name)}
        </p>
        <p>{lang.confirmation.replace("%%%", lang.verification)}</p>
        <div className="delete">
          <input
            key={object && object.item && object.item._id}
            type="text"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
          <button
            type="button"
            disabled={val !== lang.verification}
            onClick={() => {
              deleteItem(object);
              setShow(null);
            }}
          >
            {lang.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
