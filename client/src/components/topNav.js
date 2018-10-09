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
import "../styles/index.css"

export default class TopNav extends React.Component {
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
        return <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">
                <img className="logo" src="https://s3-us-west-1.amazonaws.com/morphmenuslogo/logo.png" alt="morph menus logo" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="">Sign In</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>;
    }
}
