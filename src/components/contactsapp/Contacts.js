import React, { Component } from 'react';
import './main.css';
import LoginForm from './LoginForm';
import AllContacts from './AllContacts';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Authentication extends Component{
    state = {
        authed: false,
        user: {
            id: 1
        }
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
                const userObj = JSON.stringify(userArray[0]);
                sessionStorage.setItem('user', userObj);
            }
        })
    }

    isUserAuthed = () => {
        if(this.state.authed){
            return(
                <div>
                <AllContacts user={this.state.user}/>
                </div>
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