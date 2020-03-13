import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Martina</h2>
        <StudentGraph name={"Martina"} />
      </div>
    );
  }
}

export default Home;
