import React from "react";
import "./App.css";

const Slider = props => {
  //console.log(props);
  return (
    <div className="sliderContainer">
      <input
        onChange={props.onChangeSLAmount}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        className="slider"
        id={props.id}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};
export default Slider;
