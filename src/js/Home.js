import React from "react";
import "../css/Home.css";

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
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
      height: window.innerHeight,
    });
  }

  render() {
    const styles = {
      "height": `${this.state.height}px`,
      "overflow": "hidden",
      "marginTop": `${this.props.top}px`,
    }
    const photoStyles = {
      "height": `${this.state.height}px`,
    }
    return (
      <div
        id="home"
        style={styles}
      >
        <div
          className="photo"
          style={photoStyles}
        />
      </div>
      
    )
  }
}

function Home() {
  return (
    <BackgroundImage/>
  );
}

export default Home;