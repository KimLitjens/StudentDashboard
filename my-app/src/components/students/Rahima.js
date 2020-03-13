import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Rahima</h2>
        <StudentGraph name={"Rahima"} />
      </div>
    );
  }
}

export default Home;
