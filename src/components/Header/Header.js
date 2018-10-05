import React from "react";
import { withStyles } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

const styles = () => ({
  root: {
    backgroundColor: deepPurple[700],
    position: "fixed"
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
});

const Header = () => (
  <div>
    <h1
      style={{
        backgroundColor: deepPurple[700],
        color: "white",
        padding: "10px",
        textAlign: "center",
        fontSize: "60px",
        marginTop: "0px"
      }}
    >
      Code Rally
    </h1>
  </div>
);

export default withStyles(styles)(Header);
