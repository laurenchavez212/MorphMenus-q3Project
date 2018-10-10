import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import TopNav from "../homepage/topNav";
import BottomNav from "../homepage/bottomNav";
import {Form, Input, Label } from "reactstrap";

class Home extends Component {
  render() {
    return <div className="adminContainer">
        <TopNav />
        <div>
          <h1>Welcome Oreganos Pizza Bistro!</h1>
          <Form>
            <Label>Add a menu</Label>
            <Input placeholder="Menu Name" />
          </Form>
        </div>

        <div>
          <h3>Edit A Menu</h3>
          <Link to={""}>Dinner</Link>
          <Link to={""}>Drinks</Link>
        </div>
        <BottomNav />
      </div>;
  }
}
export default Home;
