import React, { useEffect, useState } from "react";
import FormElement from "./../formElement";
import modalStyles from "./../styles/modal.css";
import styles from "./../styles/tree.css";

const DeleteModal = ({ object, lang, rtl, deleteItem, setShow }) => {
  const [val, setVal] = useState("");

  return (
    <div
      className={modalStyles.modalContent}
      style={{ direction: rtl ? "rtl" : "ltr" }}
    >
      <div className={modalStyles.modalHeader}>
        <span
          className={modalStyles.close}
          style={{ float: rtl ? "left" : "right" }}
          onClick={() => setShow(false)}
        >
          &times;
        </span>
        <h2 className={modalStyles.h2}>{lang.title}</h2>
        <div className={modalStyles.warning}>{lang.warning}</div>
      </div>
      <div className={modalStyles.modalBody}>
        {object && object.item && (
          <p
            dangerouslySetInnerHTML={createHtml(lang.content, object.item.name)}
          ></p>
        )}

        <p
          dangerouslySetInnerHTML={createHtml(
            lang.confirmation,
            lang.verification
          )}
        ></p>
        <div className={modalStyles.delete}>
          <input
            className={styles.input}
            key={object && object.item && object.item._id}
            type="text"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
          <button
            style={{ marginTop: 12 }}
            className={styles.button}
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

const createHtml = (c, replace) => {
  let content = c.replace("%%%", "<strong>" + replace + "</strong>");

  return { __html: content };
};

export default DeleteModal;
