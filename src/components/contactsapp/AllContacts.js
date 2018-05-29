import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class AllContacts extends Component{
    state = {
        contacts:[]
    }

    componentDidMount(){
        fetch(`http://localhost:4000/contacts?ownerID=${this.props.user.id}`)
        .then((data)=>{
            return data.json();
        }).then((userContacts)=>{
            this.setState({
                contacts: userContacts
            })
        })
    }

    render(){
        return(
            <div>
            <h2>All Contacts</h2>
            <ContactsList contacts={this.state.contacts}/>
            </div>
        )
    }
}

class ContactsList extends Component{
    render(){
        const contacts = this.props.contacts.map((contact)=>(
            <CardExampleHeaderCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                company={contact.company}
                notes={contact.notes}
                image={contact.image}
            />
        ));
        return(
            <div>
                <Card.Group>
                    {contacts}
                </Card.Group>
            </div>
        )
    }

}

function CardExampleHeaderCard(props){
        return(
                <Card>
                    <Image src={props.image} />
                    <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.company}</Card.Meta>
                    <Card.Description>{props.notes}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                    </Card.Content>
                </Card>
        )
}