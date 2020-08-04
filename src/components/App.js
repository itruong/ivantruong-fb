import React, { Component } from "react";
import { 
  CssBaseline,
} from '@material-ui/core';
import "../style/App.css";
import Feed from './Feed';
import HeaderAppBar from './HeaderAppBar';

const scrollTo = (href) => {
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <>
        <CssBaseline/>
        <HeaderAppBar
          windowWidth={this.state.width}
        />
        <Feed
          windowWidth={this.state.width}
        />
      </>
    );
  }
}

export default App;