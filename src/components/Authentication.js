import React, { Component } from 'react';
import './main.css';
import LoginForm from './forms/LoginForm';
import AuthMainContainer from './AuthMainContainer';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';


export default class Authentication extends Component{
    state = {
        authed: false,
        user: {},
        fieldErrors: false
      }
      sendDeets = (action, email, password) =>{
        fetch(`http://localhost:4000/users?email=${email}`)
        .then((data)=>{
          return data.json();
        }).then((userArray)=>{
          //User doesn't exist
            if (userArray.length===0 && action==="login"){
                this.setState({ 
                  authed: false,
                  fieldErrors: true,
                  errorMessage: "No User with That Email Exists. Sign up."
                });
            }
            // Password is incorrect
        else if(userArray.length !== 0 && userArray[0].password !== password && action==="login"){
            this.setState({ 
              authed: false,
              fieldErrors: true,
              errorMessage: "Your Password is Incorrect"
            });
          }
          // Email already taken
          else if(userArray.length !== 0 && action==="signup"){
            this.setState({ 
              authed: false,
              fieldErrors: true,
              errorMessage: "A user with that email already exists"
            });
          }
          // No user exists, create new user
          else if(userArray.length===0 && action==="signup"){
            let dataObj = {
              "email":email, 
              "password":password
            }
            return fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
              }).then((response) => {
                return response.json();
              }).then((data) => {
                this.sendDeets("login", data.email, data.password);
              });
          }
          // Login!
          else{
              this.setState({ 
                  user: userArray[0],
                  authed: true,
              });
          }
      })
    }
    
      authenticated = () => {
        if(!this.state.authed && this.state.fieldErrors){
        // If the user is not authenticated and there are field errors (wrong password or user already exists), send both the sendDeets method and the error messages as props.
          return(
            <LoginForm sendDeets={this.sendDeets} errorMessage={this.state.errorMessage}/>
          )
        }else if(!this.state.authed){

        //If the user is not authenticated, send the sendDeets method as props.
          return(
            <LoginForm sendDeets={this.sendDeets}/>
          )
        }else{
            // If the user authenticates, they are good to go!
          return(
            <div>
              <AuthMainContainer user={this.state.user}/>
            </div>
          )
        }
      }
    
      render() {
        return (
            <div className="main">
                <h1>Authentication Form</h1>

                <Divider section />

                {this.authenticated()}

                <Divider section />

                <Link to={`/`} className='backLink'>
                    Back to Table of Contents
                </Link>
            </div>
        );
      }
    }