import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class LoginForm extends Component{
    state={
        fields:{
            email: '',
            password: ''
        },
        fieldErrors:{}
    }

    onInputChange = event => {
        const fields = Object.assign({}, this.state.fields);
        fields[event.target.name] = event.target.value;
        this.setState({fields});
        // console.log('fields', fields);
    }

    onFormSubmit = (event) => {
        const user = this.state.fields;
        const fieldErrors = this.validate(user);
        this.setState({fieldErrors}) //if you name variables in block scope the same as object in state, they are interchangeable when you set state.
        event.preventDefault();

        if(Object.keys(fieldErrors).length) return;

        const email = (this.state.fields.email).toLowerCase();
        this.props.authenticateUser(email, this.state.fields.password)

        //*****  ADD INVERSE DATA FLOW HERE  *******//

    }

    validate = (user) => {
        const errors = {};
        if(!user.email) errors.email = 'Please enter an email address to continue';
        if(!user.password || user.password.length < 5) errors.password = 'Password invalid.';
        return errors;
    }

    render(){
        return(
            <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Email</label>
              <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
              <input
                name ="email" //keep this the same as state
                placeholder='Email' 
                type='email'
                onChange = {this.onInputChange}
                />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <span style={{color: 'red'}}>{this.state.fieldErrors.password}</span>
              <input 
                name="password"
                placeholder='Password'
                onChange = {this.onInputChange}
                 />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}