import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App/App.css";
import TopNav from "../homepage/topNav";
import BottomNav from "../homepage/bottomNav";
import { Form, Input, Button } from "reactstrap";
import { postItems } from "../../redux/actions/menuActions";
import { Link } from "react-router-dom";


class Welcome extends Component {

  state = {
    item_name: '',
    category_id:'1',
    item_price: '',
    item_description: '',
    options: '',
    allergies: '',
    image_file: ''
  }

  addToItemsList = (e) => {
    alert("Yay! You posted a new item to your menu!")
    e.preventDefault();
    return this.props.postItems(this.state)
  }
  
  render() {
    console.log("props", this.props)
    return <div className="adminContainer">
        <TopNav />
        <div>
          <h1>
            Welcome Oreganos Pizza Bistro!
            <br />
          <img className="logo" src="http://morphmenus.s3.amazonaws.com/restaurants/logos/000/000/037/normal/Screen_Shot_2018-06-14_at_12.12.32_AM.png?1528960500" alt="logo" />
          </h1>
          <Link to={"/menu/1"}>
            <Button>View your menu!</Button>
          </Link>
          <div>
            <h1>Create a New Menu Item!</h1>
        </div>
        
          <Form onSubmit={this.addToItemsList}>
            <Input onChange={e => this.setState({
                  item_name: e.target.value
          })} placeholder="Item Name" bsSize="lg" />
            <Input onChange={e => this.setState({
                  item_price: e.target.value
                })} placeholder="Price" bsSize="lg" />
            <Input onChange={e => this.setState({
                  item_description: e.target.value
                })} placeholder="Description" bsSize="lg" />
            <Input onChange={e => this.setState({
                  options: e.target.value
                })} placeholder="Options" bsSize="lg" />
            <Input onChange={e => this.setState({
                  allergies: e.target.value
                })} placeholder="Possible Allergens" bsSize="lg" />
            <Input onChange={e => this.setState({
                  image_file: e.target.value
          })} placeholder="Image Link" bsSize="lg" required />
            <Button className="" type="submit" color="primary">
              Add Item to Menu
            </Button>
        </Form>
        
        </div>

        <div />
        <BottomNav />
      </div>;
}
}


export default connect(null, { postItems })(Welcome)
