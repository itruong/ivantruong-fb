import React from 'react';
import {
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import About from './About';
import Contact from './Contact'
import Home from './Home';
import Projects from './Projects';

const containerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "80px 0",
    backgroundColor: "white",
    overflowX: "hidden",
  },
  section: {
    margin: "50px 0",
  },
}));

export default function Feed(props) {
  const classes = containerStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <Home/>
      </div>
      <div className={classes.root} id="about">
        <Container maxWidth="md">
          <About/>
        </Container>
      </div>
      <div className={classes.root} id="projects">
        <Projects
          windowWidth={props.windowWidth}
        />
      </div>
      <div className={classes.root} id="contact">
        <Container maxWidth="md">
          <Contact/>
        </Container>
      </div>
    </>
  );
}