import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Aranka from "./students/Aranka";
import Evelyn from "./students/Evelyn";
import Floris from "./students/Floris";
import Hector from "./students/Hector";
import Martina from "./students/Martina";
import Maurits from "./students/Maurits";
import Rahima from "./students/Rahima";
import Sandra from "./students/Sandra";
import Storm from "./students/Storm";
import Wietske from "./students/Wietske";
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

    // const routeList = studentData.map(item => {
    //   return (
    //     <Route path={`/students/${studentData[1]}`} component={"Aranka"} />
    //   );
    //   <StudentRoute studentName={item} />;
    // });

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

            <Route path="/students/aranka" component={Aranka} />
            <Route path="/students/evelyn" component={Evelyn} />
            <Route path="/students/floris" component={Floris} />
            <Route path="/students/hector" component={Hector} />
            <Route path="/students/martina" component={Martina} />
            <Route path="/students/Maurits" component={Maurits} />
            <Route path="/students/Rahima" component={Rahima} />
            <Route path="/students/Sandra" component={Sandra} />
            <Route path="/students/Storm" component={Storm} />
            <Route path="/students/Wietske" component={Wietske} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
