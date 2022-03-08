import React from "react";
import styles from "./styles.module.scss";
import ReactDOM from "react-dom";

export default function ModalBackground({ children, setShow }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? ReactDOM.createPortal(
        <section className={styles.wrapper}>
          <div className={styles.childrenStance}>{children}</div>
          <div
            className={styles.mainOverlay}
            onClick={() => setShow(false)}
          ></div>
        </section>,
        document.body
      )
    : null;
}
