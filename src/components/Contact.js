import React from "react";
import {
  Grid,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import linkedinLogo from "../img/linkedin-logo.png";
import githubLogo from "../img/github-logo.svg";

const contactStyles = makeStyles(theme => ({
  link: {
    fontWeight: 300,
  },
}));

function Contact() {
  const classes = contactStyles();
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h2"
          gutterBottom
        >
          Let's get in touch!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
        >
          <Link
            href="mailto:ivan.n.truong@gmail.com"
            color="inherit"
            className={classes.link}
          >
            ivantruongpub@gmail.com
          </Link>
        </Typography>
      </Grid>
      <Grid item align="center">
        <IconButton target="_blank" href="https://www.linkedin.com/in/ivan-truong-86662496/">
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="logo"
          />
        </IconButton>
      </Grid>
      <Grid item align="center">
        <IconButton target="_blank" href="https://github.com/itruong">
          <img
            alt="Github"
            src={githubLogo}
            className="logo"
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Contact;