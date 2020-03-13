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

class Routing extends Component {
  render() {
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
              <li>
                <Link to={"/students/aranka"} className="nav-link">
                  Aranka
                </Link>
              </li>
              <li>
                <Link to={"/students/evelyn"} className="nav-link">
                  {" "}
                  Evelyn
                </Link>
              </li>
              <li>
                <Link to={"/students/floris"} className="nav-link">
                  {" "}
                  Floris
                </Link>
              </li>
              <li>
                <Link to={"/students/hector"} className="nav-link">
                  {" "}
                  Hector
                </Link>
              </li>
              <li>
                <Link to={"/students/martina"} className="nav-link">
                  {" "}
                  Martina
                </Link>
              </li>
              <li>
                <Link to={"/students/maurits"} className="nav-link">
                  {" "}
                  Maurits
                </Link>
              </li>
              <li>
                <Link to={"/students/rahima"} className="nav-link">
                  {" "}
                  Rahima
                </Link>
              </li>
              <li>
                <Link to={"/students/sandra"} className="nav-link">
                  {" "}
                  Sandra
                </Link>
              </li>
              <li>
                <Link to={"/students/storm"} className="nav-link">
                  {" "}
                  Storm
                </Link>
              </li>
              <li>
                <Link to={"/students/wietske"} className="nav-link">
                  {" "}
                  Wietske
                </Link>
              </li>
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
