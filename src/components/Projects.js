import React from "react";
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import umassLogo from "../img/umass-logo-small.jpg";
import analogicLogo from "../img/analogic-logo-small.jpeg";
import artistkitcompanyIcon from "../img/artistkitcompany-icon.png";
import akcPalette from '../img/akc-palette.jpg';
import collegeprograms from '../img/collegeprograms.png';
import externalLink from '../img/externalLink.svg';
import pidMedia from "../img/pid-media.png";
import manufacturingappMedia from "../img/manufacturingapp.png";
import rpiLogo from "../img/raspberry-pi-logo.jpg";
import photo from "../img/ivantruong_2.jpg";
import githubLogo from "../img/github-logo.svg";
import instagramLogo from '../img/instagram-logo.png';
import pumosoLogo from '../img/pumoso-logo.png';
import pdfmerge from '../img/pdfmerge.png';
import pythonLogo from "../img/python-logo.svg";
import djangoLogo from "../img/django-logo.svg";
import jsLogo from "../img/js-logo.png";
import nodeLogo from '../img/nodejs.png';
import elasticLogo from '../img/elasticsearch.png';
import reactLogo from "../img/react-logo.png";
import mongoLogo from '../img/mongodb.png';
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


class Projects extends React.Component {
  projects = [
    {
      logo: pumosoLogo,
      title: "collegeprograms",
      subheader: "May 2020 - Present",
      img: collegeprograms,
      imgAlt: "collegeprograms",
      techIconUrls: [
        [jsLogo, "JavaScript"],
        [reactLogo, "React.js"],
        [muiLogo, "Material-UI"],
        [nodeLogo, "Node.js"],
        [mongoLogo, "MongoDB"],
        [elasticLogo, "Elasticsearch"],
        [firebaseLogo, "Firebase"],
        [dockerLogo, "Docker"],
      ],
      iconUrls: [],
      body: 'A web-based platform for users to easily search, find, and compare classes. On the organization side, businesses can manage their individual class offerings.',
    },
    {
      logo: pumosoLogo,
      title: "PDF Merge",
      subheader: "Jul 2020",
      img: pdfmerge,
      imgAlt: "PDF Merge",
      techIconUrls: [
        [jsLogo, "JavaScript"],
        [reactLogo, "React.js"],
        [muiLogo, "Material-UI"],
        [firebaseLogo, "Firebase"],
      ],
      iconUrls: [
        [githubLogo, "https://github.com/itruong/pdf-merge"],
        [externalLink, "https://www.pdfmerge.pumoso.com/"]
      ],
      body: 'A free, improved static PDF Merge web app with intuitive, mobile-friendly UI. By moving all logic into the browser side, this service can be offered for free while maintaining user privacy.',
    },
    {
      logo: artistkitcompanyIcon,
      title: "Invoice Essentials by A.K.C",
      subheader: "Jul 2020 - Present",
      img: akcPalette,
      imgAlt: "Palette 1.0",
      techIconUrls: [
        [jsLogo, "JavaScript"],
        [reactLogo, "React Native"]
      ],
      iconUrls: [],
      body: 'A React Native app that lets users create and store invoices locally on their mobile devices.',
    },
    {
      logo: artistkitcompanyIcon,
      title: "Palette by A.K.C",
      subheader: "Jan 2020 - Present",
      img: akcPalette,
      imgAlt: "Palette 1.0",
      techIconUrls: [],
      iconUrls: [
        [instagramLogo, 'https://www.instagram.com/artistkitcompany/'],
        [externalLink, "https://www.artistkitcompany.com/"]
      ],
      body: 'Artist Kit Company\'s core product designed to be compact, lightweight, and durable for makeup artists on the go. Unlike existing palettes on the market, the original Palette 1.0 comes with a transparent top, fits 10 removable stainless steel pans, and has a footprint the size of a credit card.',
    },
    {
      logo: itLogo,
      title: "ivantruong.com",
      subheader: "Aug 2019",
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
      body: 'Exploring React + MaterialUI in a static website hosted by Firebase.',
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
        I created this web application to track and report manufacturing metrics such as 
        labor efficiency and takt time for internal use at Analogic Corporation.
        Data visualizations were initially rendered in D3.js and eventually moved
        to Microsoft Power BI.
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
        We designed a miniature pulley-driven elevator controlled
        by a PID controller implemented using Arduino UNO. This controller took 
        platform height measurements as input from an ultrasonic sensor and adjusted 
        the duty cycle voltage output to the motor controller based on the error 
        from the desired height.
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

  createProjectCards() {
    const gridItems = [];
    for(const [key, project] of this.projects.entries()){
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
            size={this.getSize()}
          />
        </Grid>
      );
    }
    return gridItems;
  }

  getSize() {
    if(this.props.windowWidth < 630) {
      return 'slim';
    }
    return 'wide';
  }

  renderProjectCards() {
    return (
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h2"
            gutterBottom
          >
            and here's what I'm working on
          </Typography>
        </Grid>
        {this.createProjectCards()}
      </Grid>
    )
  }

  render() {
    if (this.getSize() === 'slim') {
      return this.renderProjectCards();
    }
    return (
      <Container maxWidth="md">
        {this.renderProjectCards()}
      </Container>
    );  
  }
}

export default Projects;