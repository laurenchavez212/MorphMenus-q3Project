import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import TopNav from "../homepage/topNav";
import BottomNav from "../homepage/bottomNav";
import { Form, Input, Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="adminContainer">
        <TopNav />
        <div>
                <h1>Welcome Oreganos Pizza Bistro!</h1>
                <Button>View your menu!</Button>
          <Form>
            <Input placeholder="Add a new type of Menu!" />
          </Form>
        </div>

        <div>
          <h3>Edit A Menu</h3>
          <Button>
            <Link to={""}>Dinner</Link>
          </Button>
          <Button>
            <Link to={""}>Drinks</Link>
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }
}
export default Home;
