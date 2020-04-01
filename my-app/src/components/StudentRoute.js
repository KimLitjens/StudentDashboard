import React, { Component } from "react";
import { Route } from "react-router-dom";

class StudentRoute extends Component {
  render() {
    const studentName = this.props.studentName;
    return <Route path={`/students/${studentName}`} component={studentName} />;
  }
}

export default StudentRoute;
