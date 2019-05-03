import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

export class LogOut extends Component {
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { logout }
)(LogOut);
