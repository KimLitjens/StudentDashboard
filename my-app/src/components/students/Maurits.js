import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Maurits</h2>
        <StudentGraph name={"Maurits"} />
      </div>
    );
  }
}

export default Home;
