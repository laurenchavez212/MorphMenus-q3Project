import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../../styles/index.css";

export default class BottomNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              Copyright © 2018 Morph Menus. All rights reserved.
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
