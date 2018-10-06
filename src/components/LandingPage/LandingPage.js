import React, { Component } from "react";
import { Button } from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "40px",
            marginLeft: "50px",
            marginRight: "50px",
            minHeight: "200px"
          }}
        >
          <h3 style={{ fontSize: "30px" }}>
            <div style={{ paddingTop: "10px", textAlign: "center" }}>
              <p>Get experience by building real apps with a real team.</p>
              <p>
                CodeRally exists so developers who want to boost their skills
                can get the experience they need to get to the next level. There
                really is no better qualification than real project experience!
              </p>
            </div>
          </h3>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            href="/home"
            style={{ backgroundColor: grey[200], color: lightBlue[500] }}
          >
            Get Started
          </Button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
