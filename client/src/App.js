import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/AppFooter";
import ShoppingList from "./components/ShoppingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
        <Footer />
      </div>
    );
  }
}

export default App;
