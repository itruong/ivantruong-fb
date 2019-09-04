import React from "react";
import "../css/Home.css";

function BackgroundImage(props) {
  const styles = {
    //"overflow": "hidden",
    "marginTop": `${props.top}px`,
  }
  return (
    <div
      className="photo"
      style={styles}
    />
  )
}

function Home() {
  return (
    <BackgroundImage/>
  );
}

export default Home;