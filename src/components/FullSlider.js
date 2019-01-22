import React from "react";
import Slider from "./Slider";

import "./App.css";

const FullSlider = props => {
  //console.log(props);

  //console.log(props.onChangeBMI);
  // console.log(document.getElementById(props.id).value);
  return (
    <div>
      <div className="wrapper">
        <div className="sliderLabel">
          <label htmlFor={props.id}>{props.title}</label>
        </div>

        <Slider
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.defaultValue}
          onChangeSLAmount={props.onChangeSliderAmount}
          name={props.name}
          id={props.sliderId}
        />

        <div className="sliderInput">
          <input
            onChange={props.onChangeInputAmount}
            type="text"
            name={props.name}
            id={props.id}
            defaultValue={props.defaultValue}
          />
        </div>

        <div className="sliderEndText">{props.unit}</div>
      </div>
    </div>
  );
};
export default FullSlider;
