import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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

const Header = ({ classes }) => (
  <AppBar className={classes.root}>
    <Toolbar>
      <Typography variant="title" color="inherit">
        <a
          style={{ textDecoration: "none", color: "inherit", padding: "10px" }}
          href="/"
        >
          CodeRally
        </a>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
