import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, Transition } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "Meat" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="info"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
          }}
        >
          Add Item
        </Button>
      </Container>
    );
  }
}

export default ShoppingList;
