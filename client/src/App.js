import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Footer />
      </div>
    );
  }
}

export default App;
