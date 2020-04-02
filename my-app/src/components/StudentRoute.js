import React, { Component } from "react";
import StudentGraph from "./StudentGraph";

class StudentRoute extends Component {
  render() {
    const studentName = this.props.match.params.id;
    return (
      <div>
        <h2>{studentName}</h2>
        <StudentGraph name={studentName} />
      </div>
    );
  }
}

export default StudentRoute;
