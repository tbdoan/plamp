// Imports
import plantpng from "../Images/live_plant2.png";
import plant40 from "../Images/live_plant40battery.png";
import plant0 from "../Images/live_plant0battery.png";
import deadplant from '../Images/dead_plant.png';

import "./styles.css";
import React, { useState, useEffect } from "react";

function PlantDisplay(props) {
  
  /*
    const [batLevel, setBatLevel] = useState(0);

  useEffect(() => {
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => {
        console.log(data.batteryLevel);
        setBatLevel(data.batteryLevel);
      });
  }, []);
*/
  if (props.batLevel > 70) {
    return <img className="photo" src={plantpng} />;
  } else if (props.batLevel <= 70 && props.batLevel > 30) {
    return <img className="photo" src={plant40} />;
  } else if (props.batLevel <= 30 && props.batLevel > 5) {
    return <img className="photo" src={plant0} />;
  }
  else {
    return <img className="photo" src={deadplant} />;
  }
}

export default PlantDisplay;
