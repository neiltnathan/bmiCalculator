import React, { Component } from "react";
import FullSlider from "./FullSlider";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    //changed class methods to arrow functions binding no longer required
    // this.onHeightChange = this.onHeightChange.bind(this);
    // this.onWeightChange = this.onWeightChange.bind(this);
    // this.onAgeChange = this.onAgeChange.bind(this);
    // this.calculateBmiColor = this.calculateBmiColor.bind(this);
    // this.displayBmiWarningAge = this.displayBmiWarningAge.bind(this);
    // this.onWeightInputChange = this.onWeightInputChange.bind(this);
    // this.onHeightInputChange = this.onHeightInputChange.bind(this);
    // this.onAgeInputChange = this.onAgeInputChange.bind(this);

    //default state
    this.state = {
      height: 0.75,
      weight: 1.0,
      age: 1.0,
      bmi: 0,
      display: "block",
      bgColor: "#feb042",
      bmiText:
        "You are underweight. This can be a risk to your health. Contact your doctor. This is especially important if you have lost a lot of weight in a short time, without knowing how this happens."
    };
  }

  componentDidMount() {
    this.setState({
      bmi: (
        this.state.weight /
        (this.state.height * this.state.height)
      ).toFixed(1)
    });
  }

  //update age input fields from age slider value
  onAgeChange = event => {
    let age = event.target.value;
    document.getElementById("age-input").value = age;
    this.setState({ age: age });

    this.displayBmiWarningAge(age);
  };

  //update height input fields from height slider value
  onHeightChange = event => {
    let height = event.target.value;
    document.getElementById("height-input").value = height;
    this.setState({ height: height });
    this.calculateBmiColor();
    this.displayBmiWarningHeight(height);
  };

  //update weight input fields from weight slider value
  // applied this.calculateBmiColor  function as call back function  (the weight input and weight slider were not synchronised)
  onWeightChange = event => {
    let weight = event.target.value;
    document.getElementById("weight-input").value = weight;
    this.setState(
      {
        weight: weight
      },
      this.calculateBmiColor
    );
  };

  // update bmi backgroundcolor and bmi warning text
  calculateBmiColor = () => {
    console.log(this.state.weight);
    let bmi = (
      this.state.weight /
      (this.state.height * this.state.height)
    ).toFixed(1);

    if (bmi <= 18.5) {
      this.setState({
        bgColor: "#feb042",
        bmiText:
          "You are underweight. This can be a risk to your health. Contact your doctor. This is especially important if you have lost a lot of weight in a short time, without knowing how this happens."
      });
    }

    if (bmi > 18.5 && bmi < 25) {
      this.setState({
        bgColor: "#2c9e3c",
        bmiText:
          "You have a healthy weight. A healthy weight is important to prevent cardiovascular disease."
      });
    }

    if (bmi > 25 && bmi < 30) {
      this.setState({
        bgColor: "#dc3b27",
        bmiText:
          "You are overweight. That means an increased risk of cardiovascular disease. Try to lose weight by eating healthy and exercising more. A lot of fat around your stomach is an extra risk. Therefore measure your waist circumference."
      });
    }

    if (bmi > 30 && bmi < 35) {
      this.setState({
        bgColor: "#c72121",
        bmiText:
          "You are seriously overweight (obese). That means a high risk of cardiovascular disease. Try to lower your weight. Every kilo less counts. By eating healthy and exercising more, you lower your risk. Ask your doctor for advice."
      });
    }

    if (bmi > 35) {
      this.setState({
        bgColor: "#8c181b",
        bmiText:
          "You are seriously overweight (extreme obesity). That means a very high risk of cardiovascular disease. Try to lower your weight. Every kilo less counts. By eating healthy and exercising more, you lower your risk. Ask your doctor for advice."
      });
    }
  };

  //display bmi warning text depending on age
  displayBmiWarningAge = age => {
    // console.log(age);
    if (age > 70) {
      this.setState({
        display: "block"
      });
    }

    if (age <= 70 && age >= 2) {
      this.setState({
        display: "none"
      });
    }

    if (this.state.height > 1.9 || this.state.height <= 1.58) {
      this.setState({
        display: "block"
      });
    }

    if (age < 2) {
      this.setState({
        display: "block"
      });
    }
  };

  //display bmi warning text depending on height
  displayBmiWarningHeight = height => {
    //  console.log(height);
    if (height > 1.9) {
      this.setState({
        display: "block"
      });
    }

    if (height <= 1.9 && height > 1.58) {
      this.setState({
        display: "none"
      });
    }

    // console.log(this.state.age);
    if (this.state.age > 70 || this.state.age < 2) {
      this.setState({
        display: "block"
      });
    }

    if (height < 1.58) {
      this.setState({
        display: "block"
      });
    }
  };

  //update age input fields from age slider value
  // applied this.calculateBmiColor  function as call back function  (the age input and age slider were not synchronised)

  onAgeInputChange = event => {
    let age = event.target.value;

    document.getElementById("age-slider").value = age;
    this.setState(
      {
        age: age
      },
      this.calculateBmiColor
    );
  };

  //update height input fields from height slider value
  // applied this.calculateBmiColor  function as call back function  (the height input and height slider were not synchronised)

  onHeightInputChange = event => {
    let height = event.target.value;
    document.getElementById("height-slider").value = height;
    this.setState(
      {
        height: height
      },
      this.calculateBmiColor
    );
  };

  //update weight input fields from weight slider value
  // applied this.calculateBmiColor  function as call back function  (the weight input and weight slider were not synchronised)

  onWeightInputChange = event => {
    let weight = event.target.value;
    document.getElementById("weight-slider").value = weight;
    this.setState(
      {
        weight: weight
      },
      this.calculateBmiColor
    );
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Calculate your BMI</h1>
        </div>

        <form action="" className="formContainer">
          <div className="genderSelect" style={{ display: "none" }}>
            <span> Gender</span>
            <span className="gender">
              <input
                type="radio"
                id="male"
                name="sex"
                defaultValue="male"
                defaultChecked
              />
            </span>

            <label htmlFor="male">male</label>
            <input type="radio" id="female" name="sex" value="female" />
            <label htmlFor="female">female</label>
          </div>

          <div className="sliders">
            <FullSlider
              min="1.0"
              max="90"
              step="1.0"
              defaultValue="1.0"
              onChangeSliderAmount={this.onAgeChange}
              // onChangeSliderAmount={e => this.onAgeChange(e)}
              title="Age"
              unit="years"
              name="age"
              id="age-input"
              onChangeInputAmount={this.onAgeInputChange}
              // onChangeInputAmount={e => this.onAgeInputChange(e)}
              sliderId="age-slider"
            />

            <FullSlider
              min="0.75"
              max="2.25"
              step="0.01"
              defaultValue="0.75"
              onChangeSliderAmount={this.onHeightChange}
              title="Height"
              unit="metre"
              name="height"
              id="height-input"
              onChangeInputAmount={this.onHeightInputChange}
              sliderId="height-slider"
            />

            <FullSlider
              min="5"
              max="200"
              step="0.1"
              defaultValue="1"
              onChangeSliderAmount={this.onWeightChange}
              title="Weight"
              unit="kg"
              name="weight"
              id="weight-input"
              onChangeInputAmount={this.onWeightInputChange}
              sliderId="weight-slider"
            />
          </div>
        </form>

        <div className="bmiWarning">
          <div
            className="bmiWarningIcon"
            style={{ display: this.state.display }}
          >
            i
          </div>

          <div
            className="bmiWarningText"
            style={{ display: this.state.display }}
          >
            <p>
              <span className="bmiInfo"> Attention! </span>The BMI measurement
              is less suitable for ages under 2 and above 70 years, and for
              lengths below 158 and above 190 cm.
            </p>
          </div>
        </div>

        <div className="bmiOverview">
          <h1 className="bmiHeader"> Your BMI</h1>
          <div
            className="bmiResult"
            style={{ backgroundColor: this.state.bgColor }}
          >
            <h3>BMI</h3>
            {(
              this.state.weight /
              (this.state.height * this.state.height)
            ).toFixed(1)}
          </div>
          <div className="bmiText">
            <p>{this.state.bmiText}</p>
          </div>

          <div className="bmiLevels">
            <div className="bmiLevel1">
              <h4>Under Weight</h4>
              <p>Under 18.5</p>
            </div>

            <div className="bmiLevel2">
              <h4>Healthy Weight</h4>
              <p>18.5 to 25</p>
            </div>

            <div className="bmiLevel3">
              <h4>Over Weight</h4>
              <p>25 to 30</p>
            </div>

            <div className="bmiLevel4">
              <h4>Obese</h4>
              <p>30 to 35</p>
            </div>

            <div className="bmiLevel5">
              <h4>Extreme Obese</h4>
              <p>Over 35</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
