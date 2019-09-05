import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "../css/Projects.css";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import umassLogo from "../img/umass-logo-small.jpg";
import analogicLogo from "../img/analogic-logo-small.jpeg";
import pidMedia from "../img/pid-media.png";
import manufacturingappMedia from "../img/manufacturingapp.png";
import rpiLogo from "../img/raspberry-pi-logo.jpg";
import photo from "../img/ivantruong_2.jpg";
import githubLogo from "../img/github-logo.svg";
import pythonLogo from "../img/python-logo.svg";
import djangoLogo from "../img/django-logo.svg";
import jsLogo from "../img/js-logo.png";
import reactLogo from "../img/react-logo.png";
import muiLogo from "../img/mui-logo.png";
import arduinoLogo from "../img/arduino-logo.png";
import firebaseLogo from "../img/firebase-logo.png";
import cppLogo from "../img/cpp-logo.png";
import dlibLogo from "../img/dlib-logo.png";
import d3Logo from "../img/d3-logo.svg";
import dockerLogo from "../img/docker-logo.png";
import tuxLogo from "../img/tux-logo.png";
import mssqlLogo from "../img/mssql-logo.svg";
import itLogo from "../img/favicon.png";

class ProjectCard extends React.Component {

  renderImage(key, src, alt=null) {
    return <img key={key} src={src} alt={alt} title={alt} className="icon"/>
  }

  renderIconButton(key, image, link) {
    return <IconButton key={key} target="_blank" href={link}>{image}</IconButton>
  }

  createDivider() {
    if(this.props.iconUrls)
      return <Divider variant="middle"/>
  }

  createIconButtons() {
    if(this.props.iconUrls){
      const buttons = [];
      for (let [key, iconInfo] of this.props.iconUrls.entries()){
        buttons.push(this.renderIconButton(key, this.renderImage(key, iconInfo[0]), iconInfo[1]));
      }
      return buttons;
    }
  }

  createIcons() {
    if(!this.props.techIconUrls)
      return
    const icons = [];
    for (let [key, iconInfo] of this.props.techIconUrls.entries()){
      icons.push(
        <Grid item key={key}>
          {this.renderImage(key, iconInfo[0], iconInfo[1])}
        </Grid>
      );
    }
    return icons;
  }

  render(){
    const { classes } = this.props;
    return (
      <Card elevation={3} className={classes.card}>
        <CardHeader
          avatar={
            <img src={this.props.logo} alt="ivantruong.com" className="logo"/>
          }
          title={this.props.title}
          subheader={this.props.subheader}
        />
        <CardMedia
          className={classes.media}
          image={this.props.img}
          title={this.props.imgAlt}
        />
        
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="left"
              >
                {this.props.body}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center">
                {this.createIcons()}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        {this.createDivider()}
        <CardActions>
          {this.createIconButtons()}
        </CardActions>
      </Card>
    );
  }
}

const projectCardStyles = theme => ({
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    width: 270,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

ProjectCard = withStyles(projectCardStyles)(ProjectCard);

function Projects(props) {
  const projects = [
    {
      logo: itLogo,
      title: "ivantruong.com",
      subheader: "Aug 2019 - Present",
      img: photo,
      imgAlt: "Me",
      techIconUrls: [
        [jsLogo, "JavaScript"],
        [reactLogo, "React.js"],
        [muiLogo, "Material-UI"],
        [firebaseLogo, "Firebase"],
      ],
      iconUrls: [
        [githubLogo, "https://github.com/itruong/ivantruong"]
      ],
      body: `
        We designed a miniature pulley-driven elevator controlled
        by a PID controller implemented using Arduino UNO. This controller took 
        platform height measurements as input from an ultrasonic sensor and adjusted 
        the duty cycle voltage output to the motor controller based on the error 
        from the desired height.
      `,
    },
    {
      logo: analogicLogo,
      title: "Manufacturing App",
      subheader: "Jan 2019 - Jul 2019",
      img: manufacturingappMedia,
      imgAlt: "Analogic Manufacturing App",
      techIconUrls: [
        [pythonLogo, "Python"],
        [djangoLogo, "Django"],
        [jsLogo, "JavaScript"],
        [d3Logo, "D3"],
        [tuxLogo, "Linux"],
        [mssqlLogo, "MS SQL Server"],
        [dockerLogo, "Docker"],
      ],
      body: `
        This static website describes my professional background. I
        took this as an opportunity to explore the front-end libraries React.js and
        Material-UI. In addition, this allowed me to get accustomed with some of the
        features offered by Google Cloud Platform and Firebase.
      `,
    },
    {
      logo: umassLogo,
      title: "PID Control Elevator",
      subheader: "Jan 2018 - May 2018",
      img: pidMedia,
      imgAlt: "block diagram",
      techIconUrls: [
        [arduinoLogo, "Arduino"],
      ],
      iconUrls: [
        [githubLogo, "https://github.com/itruong/elevator_pid_control"]
      ],
      body: `
        I created this web application to track and report manufacturing metrics such as 
        labor efficiency and takt time for internal use at Analogic Corporation.
        Data visualizations were initially rendered in D3.js and eventually moved
        to Microsoft Power BI.
      `,
    },
    {
      logo: umassLogo,
      title: "Facial Recognition Lock",
      subheader: "Jan 2018 - May 2018",
      img: rpiLogo,
      imgAlt: "Raspberry Pi",
      techIconUrls: [
        [cppLogo, "C++"],
        [dlibLogo, "dlib"],
        [tuxLogo, "Linux"],
      ],
      body: `
        For our senior design project, my team designed and implemented a prototype
        door lock which consisted of a Raspberry Pi powering a servo and gear-train. 
        I was responsible for the electrical and software design, which handled the 
        facial recognition and UI logic. The dlib C++ library was used in conjunction
        with an open-source, trained, deep neural-network model to provide facial 
        recognition capability. I leveraged parallel processing and preprocessing to 
        reduce startup time as well as tuned threshold to improve match accuracy.
      `,
    }
  ]

  if(props.windowWidth < 630){
    return (
      <ProjectsSlim
        projects={projects}
      />
    )
  }
  return (
    <Container maxWidth="md">
      <ProjectsWide
        projects={projects}
      />
    </Container>
  )
}

const projectCardSlimStyles = theme => ({
  card: {
    width: "100%",
    borderRadius: 0,
    boxShadow: "none",
    borderTop: "1px solid #d3d3d38a",
    borderBottom: "1px solid #d3d3d38a"
  },
});

const ProjectCardSlim = withStyles(projectCardSlimStyles)(ProjectCard);

class ProjectsSlim extends React.Component {
  createProjectCards() {
    const gridItems = [];
    for(const [key, project] of this.props.projects.entries()){
      gridItems.push(
        <Grid item key={key}>
          <ProjectCardSlim
            logo={project.logo}
            title={project.title}
            subheader={project.subheader}
            img={project.img}
            imgAlt={project.imgAlt}
            techIconUrls={project.techIconUrls}
            iconUrls={project.iconUrls}
            body={project.body}
          />
        </Grid>
      );
    }
    return gridItems;
  }

  render() {
    return (
      <Grid container justify="center" spacing={7}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h2"
            gutterBottom
          >
            and here's what I'm working on.
          </Typography>
        </Grid>
        {this.createProjectCards()}
      </Grid>
    );  
  }
}

class ProjectsWide extends React.Component {
  createProjectCards() {
    const gridItems = [];
    for(const [key, project] of this.props.projects.entries()){
      gridItems.push(
        <Grid item key={key}>
          <ProjectCard
            logo={project.logo}
            title={project.title}
            subheader={project.subheader}
            img={project.img}
            imgAlt={project.imgAlt}
            techIconUrls={project.techIconUrls}
            iconUrls={project.iconUrls}
            body={project.body}
          />
        </Grid>
      );
    }
    return gridItems;
  }

  render() {
    return (
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h2"
            gutterBottom
          >
            and here's what I'm working on.
          </Typography>
        </Grid>
        {this.createProjectCards()}
      </Grid>
    );  
  }
}

export default Projects;