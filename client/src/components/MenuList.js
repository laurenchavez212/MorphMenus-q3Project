import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { Row } from "reactstrap";
import { fetchMenu } from "../redux/actions/menuActions";
import { connect } from "react-redux";


class MenuList extends Component {

    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        console.log('this.props in ml', this.props)
        if (this.props.items) {
            return <div className="ItemsContainer">
                <Row>
                    {this.props.items.map(item => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </Row>
            </div>;
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = state => {
    console.log('state in mstp', state)
    return {
        items: state.menus
    };
};

export default connect(
    mapStateToProps,
    { fetchMenu }
)(MenuList);


