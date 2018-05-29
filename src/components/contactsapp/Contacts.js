import React, { Component } from 'react';
import './main.css';
import LoginForm from './LoginForm';
import AllContacts from './AllContacts';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Authentication extends Component{
    state = {
        authed: false,
        user: {}
    }

    authenticateUser = (email, password) => {
        fetch(`http://localhost:4000/users?email=${email}&&${password}`)
        .then((data)=>{
            return data.json();
        }).then((userArray)=>{
            console.log("USER ARRAY", userArray);
            if(userArray.length===0){
                console.log("USER DOES NOT EXIST")
            }else{
                this.setState({
                    user: userArray[0],
                    authed: true
                })
            }
        })
    }

    isUserAuthed = () => {
        if(this.state.authed){
            return(
                <AllContacts user={this.state.user}/>
            )
        }else{
            return(
                <LoginForm authenticateUser={this.authenticateUser}/>
            )
        }
    }



    render(){
        return(
            <div className="main">
                <h1>Welcome to Contact App</h1>
                <Divider section />
                {this.isUserAuthed()}
                <Divider section />

                <Link to={`/`} className='backLink'>
                    Back to Table of Contents
                </Link>
            </div>
        )
    }
}