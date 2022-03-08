import React from "react";
import ModalWrapper from "./modal-wrapper";
import ModalBackground from "./modal-background";

export default function Modal({ header, body, button, show, setShow }) {
  return (
    <>
      {show && (
        <ModalBackground {...{ setShow }}>
          <ModalWrapper>
            <section>
              {header && header}
              {body && typeof body === "function" ? body() : body}
              {button && <aside> {button} </aside>}
            </section>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
}
