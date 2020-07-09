import React, { Component } from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaCreativeCommonsPd,
} from "react-icons/fa";
import "./App.css";
class App extends Component {
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
      f = <h1>Your Bmi is {this.state.b}</h1>;
    }
    return (
      <div className="App container-fluid">
        <nav className="c nav-wrapper grey darken-3">
        <a className="center brand-logo">WEIGHT LOSS JOURNEY
        </a>
        </nav>

        <div class="row">
          <div class="col s12 m6">
            <div className="card">
            <span class="card-title">BMI CALCULATOR</span>
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
            <button type="submit" className="btn pink lighten-1 z-depth-0" onClick={this.showbmi}>Submit</button>
          </div>
            </div>
          </div>
          <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
        </div>
        {f}
        <footer>
          CopyRight <FaCreativeCommonsPd /> Nikhil <FaFacebookF />{" "}
          <FaInstagramSquare />{" "}
        </footer>
      </div>
    );
  }
}

export default App;
