import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
import HeaderButton from './HeaderButton';
import HeaderMenu from './HeaderMenu';
import { scrollTo } from '../utils';
import itLogo from "../img/favicon.png";

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

export default class HeaderAppBar extends React.Component {
  render() {
    if (this.props.windowWidth < 600)
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