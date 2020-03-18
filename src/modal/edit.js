import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormElement from "./../formElement";

const EditModal = ({ object, editItem, setShow, attributes }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    let element = { ...object };
    element.item = data;
    editItem(element);
    setShow(null);
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={() => setShow(false)}>
          &times;
        </span>
        <h2 className="h2">Edit Modal</h2>
        <div className="warinig">Check carfully your data before saving !</div>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  You are editing the
                  <strong>
                    &nbsp;{object && object.item && object.item.name}
                  </strong>
                  node.
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
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
