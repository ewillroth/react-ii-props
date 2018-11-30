import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ""
    };
  }

  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.item} />{" "}
        {/* <button>Add a sticker +</button> */}
      </div>
    );
  }
}

export default AddItem;
