import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import TopNav from "./topNav";
import { Container, Row, Col } from "reactstrap";

class Home extends Component {
  render() {
    return <div className="homeContainer">
        <TopNav />
        <div>
          <div className="homeBanner">
            <h1>TURN YOUR MENU INTO A POWERFUL MARKETING TOOL</h1>
            <Link to={""}>
              <button variant="raised">Sample Menu</button>
            </Link>
          </div>

          <div className="whyBanner">
            <h2>Why Your Online Menu Matters</h2>
            <br />
            <Container>
              <Row>
                <Col>
                  <h6>
                    86% of diners regularly check out menus online before
                    dining out.
                  </h6>
                </Col>
                <Col>
                  <h6>60% always or frequently look for photos</h6>
                </Col>
              </Row>
            </Container>
            <h2>
              Your online menu will help drive traffic and improve the
              overall customer experience
            </h2>
          </div>
        </div>
      </div>;
  }
}
export default Home;
