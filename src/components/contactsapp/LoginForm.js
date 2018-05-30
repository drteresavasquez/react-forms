import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';


export default class LoginForm extends Component {
    state = {
        fields: {
            email:'',
            password:''
        },
        fieldErrors:{}
    }

    onFormSubmit = (evt) => {

        const user = this.state.fields;
        const fieldErrors = this.validate(user);
        this.setState({fieldErrors});
        console.log("On Form Submit");
        console.log(this.state.fields);
        evt.preventDefault();

        if (Object.keys(fieldErrors).length) return;

        const email = (this.state.fields.email).toLowerCase();

        this.props.authenticateuser(email, this.state.fields.password);

        // ADD INVERSE DATA FLOW HERE
    }

    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({fields: fields});
    }

    validate = (user) => {
        const errors = {};
        if(!user.email) errors.email = 'Email Required';
        if(!user.password || user.password.length < 5) errors.password = "Password Invalid";
        return errors;
    }

    render(){
        return(
            <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Email</label>
              <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
              <input name='email' type='email' placeholder='Email' onChange={this.onInputChange}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <span style={{color: 'red'}}>{this.state.fieldErrors.password}</span>
              <input name='password' type='password' placeholder='Password' onChange={this.onInputChange}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}