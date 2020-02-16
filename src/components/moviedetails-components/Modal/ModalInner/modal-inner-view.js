import React, { Component } from "react";
//
import "./modal-inner.scss";

class ModalInnerView extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }
  handleOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    return (
      <>
        <div
          id="myModal"
          className="modal"
          style={{ display: this.state.open ? "flex" : "none" }}
        >
          {this.props.render(this.handleOpen)}
        </div>
      </>
    );
  }
}

export default ModalInnerView;
