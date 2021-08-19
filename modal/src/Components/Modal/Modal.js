import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <div
        className={props.modal ? `backdrop show` : "backdrop"}
        onClick={props.hideModal}
      ></div>
      <div className={props.modal ? `modal show` : "modal hide"}>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
