import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Sandra</h2>
        <StudentGraph name={"Sandra"} />
      </div>
    );
  }
}

export default Home;
