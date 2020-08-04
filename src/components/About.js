import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../style/About.css";
import analogicLogo from "../img/analogic-logo.png";
import artistkitcompanylogo from '../img/artistkitcompanylogo4.png';
import einkLogo from "../img/e-ink-logo.png";
import reggoraLogo from "../img/reggora-logo-name.jpeg";
import umassLogo from "../img/umass-logo2.png";

const aboutStyles = makeStyles(theme => ({
  text: {
    lineHeight: 1.75,
    margin: "20px 0",
    color: "rgba(0, 0, 0, 0.54)",
  }
}))

function About() {
  const classes = aboutStyles();
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12}>
        <Typography
          align="left"
          variant="h1"
        >
          I'm Ivan,
        </Typography>
        <Typography
          align="left"
          variant="h2"
        >
          a software engineer,
        </Typography>
        <Typography
          align="left"
          variant="h2"
        >
          entrepreneur, and
        </Typography>
        <Typography
          align="left"
          variant="h2"
          gutterBottom
        >
          former mechanical engineer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          align="left"
          className={classes.text}
        >
          At the fast-growing startup Reggora, I've worked in several project areas 
          including feature development, performance optimization, and application support 
          as a full-stack (React, Python, MongoDB, Elasticsearch) software engineer. 
          Recently in 2020, I've had the opportunity to partner with the make-up accessories
          startup, Artist Kit Company, to not only design and manufacture their core product, 
          the Palette line, but also develop their software operations to provide 
          services for the artist community.
        </Typography>
        <Typography
          variant="body1"
          align="left"
          className={classes.text}
        >
          Back in 2018, I graduated from the University of Massachusetts, Amherst with a 
          B.S in Mechanical Engineering and a background in Computer Science; 
          shortly after starting my career in manufacturing engineering, I 
          quickly pivoted to web development after creating a data analytics platform 
          at Analogic Corporation for tracking manufacturing efficiency. This utlimately led me to 
          my current role at Reggora.
        </Typography>
      </Grid>
        <Grid item>
          <Grid container spacing={6} justify="center">
            <Grid item>
              <img src={reggoraLogo} alt="Reggora" className="logo"/>
            </Grid>
            <Grid item>
              <img src={artistkitcompanylogo} alt="Artist Kit Company" className="logo"/>
            </Grid>
            <Grid item>
              <img src={analogicLogo} alt="Analogic" className="logo"/>
            </Grid>
            <Grid item>
              <img src={einkLogo} alt="E Ink" className="logo"/>
            </Grid>
            <Grid item>
              <img src={umassLogo} alt="UMass Amherst" className="logo"/>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default About;