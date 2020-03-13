import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Evelyn</h2>
        <StudentGraph name={"Evelyn"} />
      </div>
    );
  }
}

export default Home;
