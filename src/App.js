import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="app">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects/:name" component={Project} />
          </div>
        </Router>
      </div>
    );
  }
}
