import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormElement from "./../formElement";
import modalStyles from "./../styles/modal.css";
import styles from "./../styles/tree.css";

const EditModal = ({ object, editItem, lang, rtl, setShow, attributes }) => {
  const [_attributes_, set_attributes_] = useState(attributes);

  useEffect(() => {
    let chunks = chunkArray(attributes, 2);
    set_attributes_(chunks);
  }, [attributes]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    let element = { ...object };
    element.item = data;
    editItem(element);
    setShow(null);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
              {object && object.item && (
                <p
                  dangerouslySetInnerHTML={createHtml(
                    lang.content,
                    object.item.name
                  )}
                ></p>
              )}
            </div>
            <div style={{ flex: 1 }}>
              {object && object.item && (
                <input
                  className={styles.input}
                  ref={register}
                  type="text"
                  name="name"
                  defaultValue={object.item.name}
                />
              )}
            </div>
            <div style={{ flex: 1 }}>
              {_attributes_ &&
                _attributes_.map(attrarray => {
                  return (
                    <div
                      key={Math.random(1000000)}
                      style={{
                        display: "flex",
                        flex: 1,
                        marginTop: 8
                      }}
                    >
                      {Array.isArray(attrarray) &&
                        attrarray.map(attr => (
                          <FormElement
                            key={attr.name}
                            register={register}
                            attr={attr}
                            value={object.item[attr.name]}
                          />
                        ))}
                    </div>
                  );
                })}
            </div>
            <div style={{ flex: 1, marginTop: 12 }}>
              <button className={styles.button} type="submit">
                {lang.button}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const chunkArray = (data, chunk_size) => {
  var index = 0;
  var arrayLength = data.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = data.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
};

const createHtml = (c, replace) => {
  let content = c.replace("%%%", "<strong>" + replace + "</strong>");

  return { __html: content };
};

export default EditModal;
