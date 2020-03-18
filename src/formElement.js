import React, { useEffect, useState } from "react";

const FormElement = ({ attr, register }) => {
  const [Element, setElement] = useState(null);

  useEffect(() => {
    switch (attr.type) {
      case "text-input":
        setElement(
          <input
            ref={register}
            type="text"
            name={attr.name}
            placeholder={attr.placeholder}
          />
        );
        break;
      case "image":
        setElement(<input ref={register} name={attr.name} type="file" />);
        break;
      case "checkbox":
        setElement(<input ref={register} name={attr.name} type="checkbox" />);
        break;
    }
  }, [attr]);

  return <div className={attr.class}>{Element}</div>;
};

export default FormElement;
