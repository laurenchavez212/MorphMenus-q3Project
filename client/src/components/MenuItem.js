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
import { deleteItem, editItem } from "../redux/actions/menuActions"

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            toggleEditForm: false,
            editItem: {
                item_name: this.props.item.item_name,
                category_id: 1,
                item_price: this.props.item.item_price,
                item_description: this.props.item.item_description,
                options: this.props.item.options,
                allergies: this.props.item.allergies,
                image_file: this.props.item.image_file
            },
        };

        handleChange = (e) => {
            this.setState({
                ...this.state,
                editItem: {
                    ...this.state.editItem,
                    [e.target.name]: e.target.value
                }
            })
        }

        handleEditSubmit = () => {
            return this.props.editItem(this.state.editItem);
        }


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
              <img src={this.props.item.image_file} alt="food item" onClick={this.toggle} />
            </Col>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                {this.props.item.item_name}
              </ModalHeader>
              <ModalBody>
                <img src={this.props.item.image_file} alt="food" />
                {this.props.item.item_description}
              </ModalBody>
              <ModalFooter>
                <Button value={this.props.item.id} onClick={() => deleteItem(this.props.item.id)}>
                  Delete me
                </Button>
                <Button onClick={() => this.setState({
                      toggleEditForm: !this.state.toggleEditForm
                    })}>
                  Edit
                </Button>
              </ModalFooter>
            </Modal>

            {/* EDIT MODAL */}

            <Modal isOpen={this.state.toggleEditForm} toggle={this.toggleEditForm} className={this.props.className}>
              <ModalHeader toggle={this.toggleEditForm}>
                Edit
              </ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleEditSubmit}>
                        <FormGroup>
                            <Label for="item_name">Item Name</Label>
                            <Input onChange={this.handleChange} value={this.state.item.item_name} type="text" name="item_name" id="item_name" placeholder="Title..." required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="presenter">Presenter</Label>
                            <Input onChange={this.handleChange} defaultValue={this.state.meeting.presenter} type="select" name="presenter" id="presenter" required>
                                {presenterList}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="imgUrl">Img URL</Label>
                            <Input onChange={this.handleChange} value={this.state.meeting.imgUrl} type="text" name="imgUrl" id="imgUrl" placeholder="Add image url..." required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="about">Meeting Details</Label>
                            <Input onChange={this.handleChange} value={this.state.meeting.about} type="textarea" name="about" id="about" required />
                        </FormGroup>
                    </form>
                    
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </Modal>
          </div>;
    }
};



export default connect(null, {deleteItem})(MenuItem);
