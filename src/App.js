import React, { Component } from "react";
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
      o: !state.o,
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
      <div className="App">
        <h1>WEIGHT LOSS JOURNEY</h1>
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
          <input type="text" placeholder="Height (m)" onChange={this.updateh} />
        </div>
        <button type="submit" onClick={this.showbmi}>
          Submit
        </button>
        {f}
      </div>
    );
  }
}

export default App;
