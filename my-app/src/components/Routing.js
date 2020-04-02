import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import RawStudentData from "./../container/studentData";
import StudentLink from "./StudentLink";
import StudentRoute from "./StudentRoute";

class Routing extends Component {
  render() {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const studentData = RawStudentData.map(item => {
      return item.name;
    }).filter(unique);

    const linkList = studentData.map(item => {
      return <StudentLink studentName={item} />;
    });

    return (
      <Router>
        <div>
          <h2>Student Dashboard</h2>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              {linkList}
            </ul>
          </nav>

          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students/:id" component={StudentRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
