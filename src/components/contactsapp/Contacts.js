import React, { Component } from 'react';
import './main.css';
import LoginForm from './LoginForm';
import AllContacts from './AllContacts';

export default class Authentication extends Component{
    state = {
        authed: false,
        user: {
            // id: 1,
            // email: '1@1.com',
            // password: '123456789'
        }
    }

    //create method to authenticate user
    authenticateUser = (email, password) => {
        fetch(`http://localhost:4000/user?email=${email}&&${password}`)
        .then((data) => {
            return data.json();
        }).then ((userArray) => {
            console.log("USER ARRAY", userArray);
            if (userArray.length === 0){
                console.log("USER DOES NOT EXIST")
            } else {
                this.setState({
                    user: userArray[0],
                    authed: true
                })
            }
        })
        
        // if (this.state.user.email === email && this.state.user.password === password) {
        //     this.setState({
        //         authed: true
        //     })
        // }
    }

    isUserAuthed = () => {
        if (this.state.authed){
            return (
                <AllContacts user = {this.state.user} />
            )
        } else {
            return ( 
                <LoginForm authenticateUser = {this.authenticateUser}/>
            )
        }
    }


    render(){
        return(
            <div className="main">
                <h1>Welcome to Contact App</h1>
                {this.isUserAuthed()}
            </div>
        )
    }
}