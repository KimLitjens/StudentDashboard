import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hector</h2>
        <StudentGraph name={"Hector"} />
      </div>
    );
  }
}

export default Home;
