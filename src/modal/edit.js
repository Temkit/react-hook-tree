import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormElement from "./../formElement";

const EditModal = ({ object, editItem, lang, rtl, setShow, attributes }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    let element = { ...object };
    element.item = data;
    editItem(element);
    setShow(null);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  {object &&
                    object.item &&
                    lang.content.replace("%1", object.item.name)}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {object && object.item && (
                  <input
                    ref={register}
                    type="text"
                    name="name"
                    defaultValue={object.item.name}
                  />
                )}
              </div>
            </div>
            <div className="row">
              {attributes &&
                attributes.map(attr => (
                  <FormElement
                    key={attr.name}
                    register={register}
                    attr={attr}
                  />
                ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button type="submit">{lang.button}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
