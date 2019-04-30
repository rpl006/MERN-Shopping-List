import React, { Component } from "react";

import { Container, Spinner } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="bg-dark pt-2 pb-2 mt-5 text-center">
          <Container>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
          </Container>
        </div>
        <div className="bg-info pt-1 pb-1">
          <h6 className="text-white mt-3 mb-3">
            Copyright © 2019. All rights reserved.
          </h6>
        </div>
      </div>
    );
  }
}

export default Footer;
