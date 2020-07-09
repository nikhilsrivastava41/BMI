import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dash from "./components/dash";
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Dash />
        <Footer />
      </div>
    );
  }
}

export default App;
