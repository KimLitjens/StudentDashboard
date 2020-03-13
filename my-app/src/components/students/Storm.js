import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Storm</h2>
        <StudentGraph name={"Storm"} />
      </div>
    );
  }
}

export default Home;
