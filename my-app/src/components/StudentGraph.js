import React, { Component } from "react";
import "./../App.css";
import Week from "./Week";

class StudentGraph extends Component {
  render() {
    const name = this.props.name;

    return (
      <div>
        <div>
          <h2>Week1</h2>
          <Week WNumber={"W1"} name={name} />
        </div>
        <div>
          <h2>Week2</h2>
          <Week WNumber={"W2"} name={name} />
        </div>
        <div>
          <h2>Week3</h2>
          <Week WNumber={"W3"} name={name} />
        </div>
        <div>
          <h2>Week4</h2>
          <Week WNumber={"W4"} name={name} />
        </div>
        <div>
          <h2>Week5</h2>
          <Week WNumber={"W5"} name={name} />
        </div>
        <div>
          <h2>Week6</h2>
          <Week WNumber={"W6"} name={name} />
        </div>
      </div>
    );
  }
}
export default StudentGraph;
