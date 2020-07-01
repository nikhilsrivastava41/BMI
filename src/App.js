import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  state = {
    o: false,
    w: 1,
    h: 1,
    b: 1,
  };
  updatew = (e) => {
    this.setState({
      w: e.target.value,
    });
  };
  updateh = (e) => {
    this.setState({
      h: e.target.value,
    });
  };
  showbmi = () => {
    this.setState((state) => ({
      o: true,
      b: state.w / (state.h * state.h),
    }));
    console.log(this.state.b);
  };
  render() {
    const on = this.state.o;
    let f;
    if (on) {
      f = <h1>Your Bmi is {this.state.b}</h1>;
    }
    return (
      <div className="App container-fluid">
        <h1 className="c">WEIGHT LOSS JOURNEY</h1>

        <div class="row">
          <div class="col-lg-6">
            <h2 className="j">BMI CALCULATOR</h2>
            <div className="card card-body">
              <span>Enter Weight</span>
              <div className="hey">
                <input
                  type="text"
                  placeholder="weight (kgs)"
                  onChange={this.updatew}
                />
              </div>
              <span>Enter Height</span>
              <div className="hey">
                <input
                  type="text"
                  placeholder="Height (m)"
                  onChange={this.updateh}
                />
              </div>
              <button
                type="submit"
                onClick={this.showbmi}
                className="btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <h2 className="j">Find your category</h2>
            <div className="card card-body">
              <ul>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
                <li>If BMI > 30 , Obese</li>
              </ul>
            </div>
          </div>
        </div>
        {f}
        <footer>CopyRight Nikhil</footer>
      </div>
    );
  }
}

export default App;
