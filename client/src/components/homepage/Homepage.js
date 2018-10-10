import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import TopNav from "./topNav";
import BottomNav from "./bottomNav";
import { Container, Row, Col, Card, CardTitle, } from "reactstrap";

class Home extends Component {
  
  render() {
    return <div className="homeContainer">
        <TopNav />
        <div className="homeBanner">
          <h1>TURN YOUR MENU INTO A POWERFUL MARKETING TOOL</h1>
          <Link to={""}>
            <button variant="raised">SAMPLE MENU</button>
          </Link>
        </div>

        <div className="whyBanner">
          <Row>
            <h2>Why Your Online Menu Matters</h2>
          </Row>
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

          <Row>
            <h2>
              Your online menu will help drive traffic and improve the
              overall customer experience
            </h2>
          </Row>
        </div>

        <div className="screenShots">
          <Row className="fluid">
            <Col>
              <img src="https://s3-us-west-1.amazonaws.com/morphmenuslogo/Screen+Shot+2018-09-13+at+1.15.12+PM.png" alt="morphImg" />
            </Col>
            <Col>
              <img src="https://s3-us-west-1.amazonaws.com/morphmenuslogo/Screen+Shot+2018-09-13+at+1.16.19+PM.png" alt="morphImg" />
            </Col>
            <Col>
              <img src="https://s3-us-west-1.amazonaws.com/morphmenuslogo/Screen+Shot+2018-09-13+at+1.17.18+PM.png" alt="morphImg" />
            </Col>
          </Row>
        </div>

        <div className="whyList">
          <Row />
          <h1>Why Morph Menus</h1>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  Our menu provides the best experience for your customers
                  online
                </CardTitle>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  We handle all of the tech, which saves you time and money
                </CardTitle>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  Streamlines your menus across Yelp, Facebook, Google and
                  more
                </CardTitle>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  Menu management for multiple locations or concepts
                </CardTitle>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  Easily maintain, update and edit the menu or menus from
                  anywhere anytime
                </CardTitle>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>
                  Continued innovation and improvements making sure your
                  menu is the best online
                </CardTitle>
              </Card>
            </Col>
          </Row>
      </div>
      
      <BottomNav />
      </div>;
  }
}
export default Home;
