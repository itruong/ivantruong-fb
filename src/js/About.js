import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../css/About.css";
import analogicLogo from "../img/analogic-logo.png";
import einkLogo from "../img/e-ink-logo.png";
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
          gutterBottom
        >
          an aspiring software engineer and former mechanical engineer,
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          align="left"
          className={classes.text}
        >
          Currently, I'm actively searching for a junior software engineering position
          with a company that I can grow and make an impact with. 
          Some of my interests within software engineering at the moment include web and 
          mobile development; however, I'm excited about learning new technologies and 
          concepts, such as machine learning. 
        </Typography>
        <Typography
          variant="body1"
          align="left"
          className={classes.text}
        >
          Recently in 2018, I graduated from the University of Massachusetts, 
          Amherst with a Bachelor of Science in Mechanical Engineering and internship 
          experience in mechanical process development at E Ink Corporation where I 
          worked primarily on prototyping and developing efficient manufacturing 
          methods for the San Diego DAZZLE project. During this time
          I began developing software tools to automate tasks for the engineering team.
        </Typography>
        <Typography
          variant="body1"
          align="left"
          className={classes.text}
        >
          Since then, I've worked as a manufacturing engineer at Analogic Corporation 
          where I developed manufacturing processes for CT detection systems. I also
          continued developing software to automate manufacturing tasks. At Analogic, I
          implemented a web application that recorded and visualized manufacturing data 
          for each of the company's products. Developing the manufacturing 
          app introduced me to web technologies and concepts such as system design, 
          scalability, and containerization. In addition, working on an application
          of this complexity introduced the necessity for clean, well-tested,
          and well-designed code.
        </Typography>
      </Grid>
        <Grid item>
          <Grid container spacing={6} justify="center">
            <Grid item>
              <img src={umassLogo} alt="UMass Amherst" className="logo"/>
            </Grid>
            <Grid item>
              <img src={einkLogo} alt="E Ink" className="logo"/>
            </Grid>
            <Grid item>
              <img src={analogicLogo} alt="Analogic" className="logo"/>
            </Grid>
          </Grid>
        </Grid>
        
      
    </Grid>
  )
}


export default About;