import React from "react";
//
import "./modal-template1.scss";

const ModalTemplate1 = props => {
  return (
    <div className="modal-template1">
      <span onClick={props.handleOpen} className="close">
        &times;
      </span>
      <div className="modal-body">{props.content}</div>
    </div>
  );
};

export default ModalTemplate1;
