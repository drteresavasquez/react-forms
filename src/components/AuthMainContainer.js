import React, { Component } from 'react';

export default class AuthMainContainer extends Component{
    render(){
        return(
            <div>
                <h4>You Have Been Authenticated!</h4>
                <p>Hello, {this.props.user.name}!</p>
            </div>
        )
    }
}