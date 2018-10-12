import React, { Component } from "react";
import "../App/App.css";
import TopNav from "./homepage/topNav";
import BottomNav from "./homepage/bottomNav";
import MenuList from "./MenuList";
import { Row, Container } from "reactstrap";

class Menu extends Component {

  render() {
      return <div>
          {/* {console.log("items here", this.props.items)} */}
          <TopNav />
          <div className="menuContainer">
            <div className="menuHead">
              <img className="logo" src="http://morphmenus.s3.amazonaws.com/restaurants/logos/000/000/037/normal/Screen_Shot_2018-06-14_at_12.12.32_AM.png?1528960500" alt="logo" />
            </div>
            <Container>
              <Row className="categoryName">
                <h3>Tastes</h3>
                  </Row>   
                  <Row>
                      <MenuList />
                  </Row>
                      {/* {this.props.items ? this.props.items.map(item => <Button key={item.id}>{item.item_name}</Button>) : null} */}
            </Container>
          </div>

          <BottomNav />
        </div>;
  }
}

export default Menu;
