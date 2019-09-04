import React, { Component } from "react";
import { 
  AppBar,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
import Home from "./Home"
import "../css/Main.css"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import itLogo from "../img/favicon.png";

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

const appBarStyles = theme => ({
  appBar: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: 'black',
    boxShadow: 'none',
    borderBottom: '1px solid #d3d3d38a',
    //height: 64,
  },
  appBarLogo: {
    margin: "0 12px",
    backgroundImage: `url(${itLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: 40,
    width: 40,
  },
  condensedAppBarLogo: {
    margin: "0 12px",
    backgroundImage: `url(${itLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: 32,
    width: 32,
  },
});

const buttonStyles = makeStyles(theme => ({
  appBarButton: {
    margin: "0 10px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",   
    },
  },
  appBarButtonText: {
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: "0.5",
    },
    fontWeight: "300",
    textTransform: "none",
  },
}));

const scrollTo = (href) => {
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
};

function HeaderButton(props) {
  const classes = buttonStyles();

  return (
    <Button
      color="inherit"
      className={classes.appBarButton}
      disableTouchRipple
      onClick={ () => scrollTo(props.href) }
    >
      <Typography 
        variant='h6'
        className={classes.appBarButtonText}
      >
        {props.value}
      </Typography>
    </Button>
  );
}

class HeaderAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    if (this.state.width < 600)
      return <HeaderAppBarCondensed/>
    return <HeaderAppBarWide/>
  }
}

class HeaderAppBarCondensed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    }
  }

  toggleDrawer(isOpen) {
    this.setState({
      isMenuOpen: isOpen,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar id="appBar" className={classes.appBar}>
          <Toolbar>
            <IconButton 
              className={classes.condensedAppBarLogo}
              disableRipple
              href="https://www.ivantruong.com/"
            >
            </IconButton>
            <div className="app-bar-button-group"> 
              <IconButton
                aria-label="menu"
                onClick={() => this.toggleDrawer(true)}
              >
                <MenuIcon/>
              </IconButton>
              <HeaderMenu
                open={this.state.isMenuOpen}
                onClick={(href) => {
                  this.toggleDrawer(false);
                  if(Boolean(href)){
                    setTimeout(() => {
                      scrollTo(href);
                    }, 0);
                  }
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderAppBarCondensed.propTypes = {
  classes: PropTypes.object.isRequired,
};

HeaderAppBarCondensed = withStyles(appBarStyles)(HeaderAppBarCondensed)

const menuStyles = theme => ({
  list: {
    width: 250,
  },
  text: {
    fontWeight: "300",
  }
})

class HeaderMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        anchor="right"
        open={this.props.open}
        onClose={() => this.props.onClick()}
      >
        <div
          className={classes.list}
          role="presentation"
          //onClick={() => this.props.onClick()}
          //onKeyDown={() => this.props.onClick()}
        >
          <List>
            {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem 
                button 
                component="a" 
                key={text} 
                onClick={() => this.props.onClick(''.concat('#', text.toLowerCase()))}
              >
                <ListItemText 
                  //className={classes.text}
                  disableTypography
                  primary={
                    <Typography 
                      variant='h6'
                      className={classes.text}
                    >
                      {text}
                    </Typography>
                  }/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

HeaderMenu = withStyles(menuStyles)(HeaderMenu)

class HeaderAppBarWide extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar id="appBar" className={classes.appBar}>
          <Toolbar>
            <IconButton 
              disableRipple
              className={classes.appBarLogo}
              href="https://www.ivantruong.com/"
            >
            </IconButton>
            <div className="app-bar-button-group">
              <HeaderButton
                href="#home"
                value="Home"
              />
              <HeaderButton
                href="#about"
                value="About"
              />
              <HeaderButton
                href="#projects"
                value="Projects"
              />
              <HeaderButton
                href="#contact"
                value="Contact"
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

HeaderAppBarWide.propTypes = {
  classes: PropTypes.object.isRequired,
};

HeaderAppBarWide = withStyles(appBarStyles)(HeaderAppBarWide)

function Feed() {
  const classes = containerStyles();

  return (
    <>
      <Home/>
      <div className={classes.root} id="about">
        <Container maxWidth="md">
          <About/>
        </Container>
      </div>
      <div className={classes.root} id="projects">
        <Container maxWidth="md">
          <Projects/>
        </Container>
      </div>
      <div className={classes.root} id="contact">
        <Container maxWidth="md">
          <Contact/>
        </Container>
      </div>
    </>
  );
}


class Main extends Component {
  render() {
    return (
      <>
        <CssBaseline/>
        <HeaderAppBar/>
        <Feed/>
      </>
    );
  }
}

export default Main;