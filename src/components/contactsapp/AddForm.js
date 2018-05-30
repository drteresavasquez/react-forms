import React, {Component} from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

export default class EditForm extends Component{
state = {
    fields: {
      name: '',
      email: '',
      company: '',
      notes: '',
      phone: '',
      rating: '',
      image: '',
      title: '',
    }
  };

  onFormSubmit = (evt) => {
    let userObject = {}
    userObject.email = this.state.fields.email;
    userObject.name = this.state.fields.name;
    userObject.company = this.state.fields.company;
    userObject.notes = this.state.fields.notes;
    userObject.phone = this.state.fields.phone;
    userObject.rating = this.state.fields.rating;
    userObject.image = this.state.fields.image;
    userObject.title = this.state.fields.title;
    this.props.saveUpdate(userObject);

    console.log("userObject", userObject);

    this.setState({
      fields: {
        name: '',
        email: '',
        company: '',
        notes: '',
        phone: '',
        rating: '',
        image: '',
        title: '',
      }
    });
    evt.preventDefault();
  };

  onInputChange = evt => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
         <Form>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Contact Name</label>
                <Input 
                    fluid placeholder='Name' 
                    name="name"
                    value={this.state.fields.name}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Contact Email</label>
                <Input 
                    fluid placeholder='Email' 
                    name="email"
                    type='email'
                    value={this.state.fields.email}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Contact Company</label>
                <Input 
                    fluid placeholder='Company' 
                    name="company"
                    type='text'
                    value={this.state.fields.company}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Contact Phone</label>
                <Input 
                    fluid placeholder='Phone' 
                    name="phone"
                    type='text'
                    value={this.state.fields.phone}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Contact Rating</label>
                <Input 
                    fluid placeholder='Rating' 
                    name="rating"
                    type='text'
                    value={this.state.fields.rating}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Contact Title</label>
                <Input 
                    fluid placeholder='Title' 
                    name="title"
                    type='text'
                    value={this.state.fields.title}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Contact Image</label>
                <Input 
                    fluid placeholder='Image' 
                    name="image"
                    type='text'
                    value={this.state.fields.image}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Contact Notes</label>
                <Input 
                    fluid placeholder='Notes' 
                    name="notes"
                    type='text'
                    value={this.state.fields.notes}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            </Form.Group>
            <Button 
                size='mini' 
                color='green'
                onClick={this.onFormSubmit}
            >
                Save                       
            </Button>
            <Button 
                size='mini' 
                color='red'
                onClick={this.props.cancelUpdate}
            >
                Cancel                       
            </Button>
        </Form>
      </div>
    );
  }
}