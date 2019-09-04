import React from "react";
import "../css/Home.css";

function BackgroundImage(props) {
  const styles = {
    "overflow": "hidden",
    "marginTop": `${props.top}px`,
  }
  return (
    <div
      id="home"
      style={styles}
    >
      <div
        className="photo"
      />
    </div>
  )
}

function Home() {
  return (
    <BackgroundImage/>
  );
}

export default Home;