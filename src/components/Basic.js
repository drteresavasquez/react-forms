import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import './main.css';
import BasicForm from './forms/BasicForm';
import { Button } from 'semantic-ui-react'

export default class Basic extends Component{
    state = {
        person: {
            name: "Teresa",
            email: "this@that.com"
        },
        edit: true,
    }

    editProfile = () => {
        if(this.state.edit){
            return(
                <div>
                    <Divider section />
                    <BasicForm person={this.state.person} saveUpdate={this.saveUpdate}/>
                </div>
            )
        }else{
            return(
                <Button 
                size='mini' 
                color='purple'
                onClick={this.toggleEdit}
                >
                    Edit Your Profile                       
                </Button>
            )
        }
    }

    saveUpdate = (name, email) => {
        this.setState({
            person: {
                name: name,
                email: email
            },
            edit: false,
        })
    }

    toggleEdit = () => {
        this.setState({
            edit: true,
        })
    }

    render(){
        return(
            <div className="main">
            
                <h1>Basic Form</h1>

                <Divider section />
                    <div>
                    <h3>Your Profile</h3>
                    <ul>
                        <li>
                            Name: {this.state.person.name} 
                        </li>
                        <li>Email: {this.state.person.email}</li>
                    </ul>
                   
                    {this.editProfile()}

                    </div>

                <Divider section />

                <Link to={`/`} className='backLink'>
                    Back to Table of Contents
                </Link>
            </div>
        )
    }
}