import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { Row } from "reactstrap";
import { fetchMenu } from "../redux/actions/menuActions";
import { connect } from "react-redux";


class MenuList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.props.fetchMenu();
    }

    componentDidUpdate() {
        if (this.props.items.length !== this.state.items.length) {
            this.setState({ items: this.props.items });            
        }
    }

render() {
    
    return <div className="ItemsContainer">
        <Row>
            {this.state.items.map(item => (
            <MenuItem key={item.id} item={item} />
            ))}
        </Row>
      </div>;
}
}

const mapStateToProps = state => {
    return {
        items: state.menus
    };
};

export default connect(
    mapStateToProps,
    { fetchMenu }
)(MenuList);


