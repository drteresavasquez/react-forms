import React, { Component } from 'react';
import './main.css';
import LoginForm from './LoginForm';
import AllContacts from './AllContacts';

export default class Authentication extends Component{
    state= {
        authed: false,
        user: {}
    }


    componentDidMount(){
        const stored = sessionStorage.getItem("user");
        if(stored){
            const parseDB = JSON.parse(stored);
            console.log("parseDB", parseDB);
            this.setState({
                authed: true,
                user: parseDB
            })
        }
    }


    authenticateuser = (email, password) => {
        fetch(`http://localhost:4000/users?email=${email}&&${password}`)
        .then((data)=>{
            return data.json();
        }).then((userArray)=>{
            console.log("user array", userArray);
            if(userArray.legth===0){
                console.log("user does not exist")
            }else{
                this.setState({
                    user: userArray[0],
                    authed: true
                })
                const userObj = JSON.stringify(userArray[0]);
                sessionStorage.setItem('user', userObj);
            }
        })
        // if(this.state.user.email === email && this.state.user.password === password){
        //     this.setState({
        //         authed: true
        //     })
        // }
    }

isUserAuthed = () => {
    if(this.state.authed){
        return(
            <AllContacts user={this.state.user}/>
        )
    }else{
        return(
            <LoginForm authenticateuser={this.authenticateuser} />
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