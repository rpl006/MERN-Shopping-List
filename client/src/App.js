import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/AppFooter";
import ShoppingList from "./components/ShoppingList";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
