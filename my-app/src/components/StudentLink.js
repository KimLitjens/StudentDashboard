import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentLink extends Component {
  render() {
    const studentName = this.props.studentName;
    return (
      <li key={studentName}>
        <Link to={`/students/${studentName}`} className="nav-link">
          {studentName}
        </Link>
      </li>
    );
  }
}

export default StudentLink;
