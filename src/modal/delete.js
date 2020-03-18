import React, { useEffect, useState } from "react";
import FormElement from "./../formElement";

const DeleteModal = ({ object, deleteItem, setShow }) => {
  const [val, setVal] = useState("");

  return (
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={() => setShow(false)}>
          &times;
        </span>
        <h2 className="h2">Are you absolutely sure?</h2>
        <div className="warinig">
          Unexpected bad things will happen if you don’t read this!
        </div>
      </div>
      <div className="modal-body">
        <p>
          This action cannot be undone. This will permanently delete the
          <strong>&nbsp; {object && object.item && object.item.name}</strong>
          node, and remove all children associations.
        </p>
        <p>
          Please type <strong>confirmed</strong> to delete.
        </p>
        <div className="delete">
          <input
            key={object && object.item && object.item._id}
            type="text"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
          <button
            type="button"
            disabled={val !== "confirmed"}
            onClick={() => {
              deleteItem(object);
              setShow(null);
            }}
          >
            delete this node
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
