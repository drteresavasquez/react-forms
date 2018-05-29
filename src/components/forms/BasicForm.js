import React, {Component} from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

export default class BasicForm extends Component{
state = {
    fields: {
      name: this.props.person.name,
      email: this.props.person.email
    },
    fieldErrors: {},
  };

  onFormSubmit = evt => {
    const email = this.state.fields.email;
    const name = this.state.fields.name;
    this.props.saveUpdate(name, email);

    this.setState({
      fields: {
        name: '',
        email: ''
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
        <h3>Edit Your Profile</h3>

         <Form>
            <Form.Group widths='equal'>
            <Form.Field>
                <label>Update Name</label>
                <Input 
                    fluid placeholder='Name' 
                    name="name"
                    value={this.state.fields.name}
                    onChange={this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Update Email</label>
                <Input 
                    fluid placeholder='Email' 
                    name="email"
                    type='email'
                    value={this.state.fields.email}
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
        </Form>
      </div>
    );
  }
}