import React, { Component } from "react";

export default class Dash extends Component {
  state = {
    o: false,
    w: 1,
    h: 1,
    b: 1,
  };
  update = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  showbmi = () => {
    this.setState((state) => ({
      o: true,
      b: state.w / (state.h * state.h),
    }));
  };
  render() {
    const on = this.state.o;
    let f;
    if (on) {
      f = <h5>Your Bmi is {this.state.b}</h5>;
    }
    return (
      <div>
        <div class="row">
          <div class="col s12 m6 offset-m3">
            <div className="card">
              <span class="center ya">BMI CALCULATOR</span>
              <div className="input-field">
                <label htmlFor="lastName">Enter Weight</label>
                <input
                  type="text"
                  placeholder="weight (kgs)"
                  id="w"
                  onChange={this.update}
                ></input>
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Enter Height</label>
                <input
                  type="text"
                  placeholder="height (m)"
                  id="h"
                  onChange={this.update}
                ></input>
              </div>
              <div className="input-field">
                <button
                  type="submit"
                  className="btn pink lighten-1 z-depth-0"
                  onClick={this.showbmi}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {f}
      </div>
    );
  }
}
