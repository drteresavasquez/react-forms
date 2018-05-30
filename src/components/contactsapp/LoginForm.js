import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class LoginForm extends Component {
    state = {
        fields:{
            email:'',
            password: ''
        },
        fieldErrors:{},
    }

    onFormSubmit = (evt) => {
        const user = this.state.fields;
        const fieldErrors = this.validate(user);
        this.setState({fieldErrors});
        
        //default for button event to stop the form from re-rendering multiple times
        evt.preventDefault();

        if (Object.keys(fieldErrors).length) return;
        console.log("onForm Submit");
        console.log("this.state.fields", this.state.fields); /* check the state */

        /************* ADD INVERSE DATA FLOW HERE **************/
        const email = (this.state.fields.email).toLowerCase();
        this.props.authenticateUser(email, this.state.fields.password);
    }


    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields); 
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
        // console.log("what is fields", fields);
    }

    validate = (user) => {
        const errors = {};
        if (!user.email) errors.email = 'Email Required';
        if (!user.password || user.password.length < 5) errors.password = 'Password Invaild';
        return errors;
    }

    render () {
        return(
           <Form onSubmit = {this.onFormSubmit}> 
                <Form.Field>
                  <label>Email</label>
                  <span style={{color: "red"}}>{this.state.fieldErrors.email}</span>
                  <input 
                    name = 'email'
                    placeholder = 'Email' 
                    type = 'email'
                    onChange = {this.onInputChange}
                    />
                </Form.Field>
                
                <Form.Field>
                  <label>Password</label>
                  <span style={{color: "red"}}>{this.state.fieldErrors.password}</span>
                  <input 
                    name = 'password'
                    placeholder = 'Password' 
                    onChange = {this.onInputChange}
                  />
                </Form.Field>
                
                
                
                <Button type='submit'>Submit</Button>
              </Form>
            )
    }
}