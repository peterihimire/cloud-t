import React from "react";
import styles from "./styles.module.scss";
import { CloseOutlined } from "@ant-design/icons";

export default function ModalHeader({ text, subText, handleModal }) {
  return (
    <>
      {text && (
        <aside className={styles.header}>
          <div>
            <h1>{text}</h1>
          </div>
          <div
            className={styles.headerButton}
            onClick={() => handleModal(false)}
          >
            <CloseOutlined />
          </div>
        </aside>
      )}
      {subText && (
        <aside className={styles.subText}>
          <span>{subText}</span>
        </aside>
      )}
    </>
  );
}
