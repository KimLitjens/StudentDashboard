import React, { Component } from "react";
import Routing from "./components/Routing";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Routing />
        </nav>
      </div>
    );
  }
}

export default App;
