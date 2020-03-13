import React, { Component } from "react";
import StudentGraph from "./../StudentGraph";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Wietske</h2>
        <StudentGraph name={"Wietske"} />
      </div>
    );
  }
}

export default Home;
