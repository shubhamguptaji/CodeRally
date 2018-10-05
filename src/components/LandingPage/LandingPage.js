import React, { Component } from "react";
import Typist from "react-typist";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "40px",
            marginLeft: "50px",
            marginRight: "50px",
            minHeight: "350px"
          }}
        >
          <h3 style={{ fontSize: "40px" }}>
            <div style={{ paddingTop: "10px" }}>
              <p>Get experience by building real apps with a real team.</p>
              <Typist>
                CodeRally exists so developers who want to boost their skills
                can get the experience they need to get to the next level. There
                really is no better qualification than real project experience!
                <br />
                <br />
                Wanna create aur fix real life projects click the button below
                :)
              </Typist>
            </div>
          </h3>
        </div>
        <div style={{ marginLeft: "45%", marginRight: "50%" }}>
          <Link to="/home">
            <Button variant="contained" color="primary">
              <h3 style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                Home
              </h3>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
