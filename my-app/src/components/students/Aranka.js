import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Aranka</h2>
        <StudentGraph name={"Aranka"} />
      </div>
    );
  }
}

export default Home;
