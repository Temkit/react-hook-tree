import React, { useEffect, useState } from "react";
import styles from "./styles/tree.css";

const FormElement = ({ attr, register }) => {
  const [Element, setElement] = useState(null);

  useEffect(() => {
    switch (attr.type) {
      case "text-input":
        setElement(
          <input
            className={styles.input}
            ref={register}
            type="text"
            name={attr.name}
            placeholder={attr.placeholder}
          />
        );
        break;
      case "image":
        setElement(
          <input
            className={styles.input}
            ref={register}
            name={attr.name}
            type="file"
          />
        );
        break;
      case "checkbox":
        setElement(
          <input
            className={styles.input}
            ref={register}
            name={attr.name}
            type="checkbox"
          />
        );
        break;
    }
  }, [attr]);

  return <div style={{ flex: 0.5 }}>{Element}</div>;
};

export default FormElement;
