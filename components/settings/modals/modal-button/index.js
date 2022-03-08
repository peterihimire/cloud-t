import React from "react";
import styles from "./styles.module.scss";

export default function ModalButton({ text, handleModal }) {
  return (
    <section className={styles.button}>
      <button
        className="btn-primary btn-medium"
        style={{
          borderRadius: "3px",
          textTransform: "uppercase",
          marginRight: "1em",
        }}
      >
        {text}
      </button>
      <div className={styles.cancel} onClick={() => handleModal(false)}>
        Cancel
      </div>
    </section>
  );
}
