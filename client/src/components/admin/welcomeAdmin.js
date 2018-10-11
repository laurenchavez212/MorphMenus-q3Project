import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/index.css";
import TopNav from "../homepage/topNav";
import BottomNav from "../homepage/bottomNav";
import { Form, Input, Button } from "reactstrap";
// import { Link } from "react-router-dom";
import MenuButton from './MenuButton';
// import { bindActionCreators } from "redux";
import { fetchAccount } from "../../redux/actions/accountActions";
// import accounts from "../../redux/reducers/accounts";


class Welcome extends Component {

  componentDidMount() {
    this.props.fetchAccount()
  }
  render() {
    console.log(this.props)
    return <div className="adminContainer">
        <TopNav />
        <div>
        <h1>Welcome {this.props.account_name}</h1>
          <Button>View your menu!</Button>
          <Form>
            <Input placeholder="Add a new type of Menu!" />
          </Form>
        </div>

        <div>
          <h3>Edit A Menu</h3>

          {/* PULL INFO FROM ROUTES FOR MENU BUTTONS! */}
          {/* {listOfMenus} */}
        </div>
        <BottomNav />
      </div>;
}
}
  
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       fetchAccount
//     },
//     dispatch
//   );


const mapStateToProps = state => {
  console.log(state);
  return ({
    account: state.account
  })
};


export default connect(mapStateToProps, { fetchAccount })(Welcome);
