import React, {Component} from "react";
import {
  Col,
  Button,
  Modal,
  ModalHeader,
    ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import { deleteItem } from "../redux/actions/menuActions"

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        
        return <div>
            <Col className="Items">
              <p>{this.props.item.item_name}</p>
              <img className="restLogo" src={this.props.item.image_file} alt="food item" onClick={this.toggle} />
            </Col>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                {this.props.item.item_name} ${this.props.item.item_price}
              </ModalHeader>
              <ModalBody>
                    <img className="modalImg" src={this.props.item.image_file} alt="food" />
                    <p>
                        {this.props.item.item_description}
                    </p>
                    <h6>
                        {this.props.item.options}
                    </h6>
                    <h6>
                        Contains {this.props.item.allergies}
                    </h6>
              </ModalBody>
              <ModalFooter>
                <Button className="modalButton" value={this.props.item.id} onClick={() => deleteItem(this.props.item.id)}>
                  Delete
                </Button>
                    <Button className="modalButton" onClick={() => this.setState({
                      toggleEditForm: !this.state.toggleEditForm
                    })}>
                  Edit
                </Button>
              </ModalFooter>
            </Modal>

          </div>;
    }
};



export default connect(null, {deleteItem})(MenuItem);