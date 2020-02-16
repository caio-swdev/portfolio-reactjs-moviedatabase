import React, { useState } from "react";
import ReactDOM from "react-dom";
//
import ModalInner from "./ModalInner";
import ModalTemplate1 from "./ModalTemplate1";
import "./modal.scss";

const JSX_MODAL = props => {
  return (
    <ModalInner
      button={props.button}
      render={handleOpen => (
        <ModalTemplate1 handleOpen={props.handleOpen} content={props.content} />
      )}
    />
  );
};

function Modal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = e => {
    e.preventDefault();
    if (!open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setOpen(!open);
  };
  return (
    <>
      {ReactDOM.createPortal(
        open ? <JSX_MODAL {...props} handleOpen={handleOpen} /> : null,
        document.querySelector("#modal")
      )}
      <div onClick={handleOpen}>{props.button}</div>
    </>
  );
}

export default Modal;
