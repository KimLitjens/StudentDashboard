import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Floris</h2>
        <StudentGraph name={"Floris"} />
      </div>
    );
  }
}

export default Home;
