import "./index.css";

import { Component } from "react";

class Notes extends Component {
  state = { notes: "page" };
  render() {
    const { notes } = this.state;
    return <h1>notes {notes}</h1>;
  }
}

export default Notes;
