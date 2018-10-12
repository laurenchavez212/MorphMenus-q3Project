import React, { Component } from "react";
import {
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    Form
} from "reactstrap";
import { connect } from "react-redux";
import { deleteItem, editItem } from "../redux/actions/menuActions"
import { bindActionCreators } from "redux";
import "../App/App.css";


class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      toggleEditForm: false,
        editItem: {
        id: this.props.item.id,
        item_name: this.props.item.item_name,
        category_id: 1,
        item_price: this.props.item.item_price,
        item_description: this.props.item.item_description,
        options: this.props.item.options,
        allergies: this.props.item.allergies,
        image_file: this.props.item.image_file
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  handleEditChange = e => {
    this.setState({
      ...this.state,
      editItem: {
        ...this.state.editItem,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEditSubmit = e => {
    e.preventDefault();
    this.setState({ toggleEditForm: false });
    return this.props.editItem(this.state.editItem);
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Col className="Items">
          <p>{this.props.item.item_name}</p>
          <img
            src={this.props.item.image_file}
            alt="food item"
            onClick={this.toggle}
          />
        </Col>

        {/* Modal */}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.item.item_name} ${this.props.item.item_price}
          </ModalHeader>
          <ModalBody>
            <img
              className="modalImg"
              src={this.props.item.image_file}
              alt="food"
            />
            <p>{this.props.item.item_description}</p>
            <h6>{this.props.item.options}</h6>
            <h6>Contains {this.props.item.allergies}</h6>
          </ModalBody>
          <ModalFooter>
            <Button
              className="modalButton"
              value={this.props.item.id}
              onClick={() => this.props.deleteItem(this.props.item.id)}
            >
              Delete
            </Button>
            <Button
              className="modalButton"
              onClick={() =>
                this.setState({
                  toggleEditForm: !this.state.toggleEditForm
                })
              }
            >
              Edit
            </Button>
          </ModalFooter>
        </Modal>

        {/* EDIT MODAL */}

        <Modal
          isOpen={this.state.toggleEditForm}
          toggle={this.toggleEditForm}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleEditForm}>Edit</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleEditSubmit}>
              <FormGroup>
                <Label for="item_name">Item Name</Label>
                <Input
                  id={this.props.item.item_name}
                  type="text"
                  value={this.state.editItem.item_name}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.item_name}
                  name="item_name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="item_price">Price</Label>
                <Input
                  id={this.props.item.item_price}
                  type="text"
                  value={this.state.editItem.item_price}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.item_price}
                  name="item_price"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="item_description">Description</Label>
                <Input
                  id={this.props.item.item_description}
                  type="text"
                  value={this.state.editItem.item_description}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.item_description}
                  name="item_description"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="options">Options</Label>
                <Input
                  id={this.props.item.options}
                  type="text"
                  value={this.state.editItem.options}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.options}
                  name="options"
                />
              </FormGroup>

              <FormGroup>
                <Label for="allergies">Allergens</Label>
                <Input
                  id={this.props.item.allergies}
                  type="text"
                  value={this.state.editItem.allergies}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.allergies}
                  name="allergies"
                />
              </FormGroup>

              <FormGroup>
                <Label for="image_file">Image Url</Label>
                <Input
                  id={this.props.item.image_file}
                  type="text"
                  value={this.state.editItem.image_file}
                  onChange={this.handleEditChange}
                  placeholder={this.props.item.image_file}
                  name="image_file"
                  required
                />
                        </FormGroup>
                        <Button className="modalButton">Submit</Button>
                        <Button
                            className="modalButton"
                            onClick={() =>
                                this.setState({
                                    toggleEditForm: !this.state.toggleEditForm
                                })
                            }
                        >
                            Close
            </Button>
                    </Form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteItem,
      editItem
    },
    dispatch
  );


export default connect(null, mapDispatchToProps)(MenuItem);


