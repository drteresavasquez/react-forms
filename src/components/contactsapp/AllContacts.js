import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class AllContacts extends Component{
    state = {
        contacts:[
            {
              "id": 1,
              "ownerID": 1,
              "name": "This is a test",
              "email": "email@email.com",
              "phone": "615-555-5555",
              "company": "Acme",
              "position": "Head Honchoita",
              "notes": "These are the notes I took on this asshole."
            },
            {
              "id": 2,
              "ownerID": 1,
              "name": "This is a test",
              "email": "email@email.com",
              "phone": "615-555-5555",
              "company": "Acme",
              "position": "Head Honchoita",
              "notes": "These are the notes I took on this asshole."
            },
            {
              "id": 3,
              "ownerID": 1,
              "name": "This is a test",
              "email": "email@email.com",
              "phone": "615-555-5555",
              "company": "Acme",
              "position": "Head Honchoita",
              "notes": "These are the notes I took on this asshole."
            },
            {
              "id": 4,
              "ownerID": 1,
              "name": "This is a test",
              "email": "email@email.com",
              "phone": "615-555-5555",
              "company": "Acme",
              "position": "Head Honchoita",
              "notes": "These are the notes I took on this asshole."
            }
          ]
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
            
                // <Card>
                // <Card.Content>
                //     <Card.Header>{props.name}</Card.Header>
                //     <Card.Meta>{props.company}</Card.Meta>
                //     <Card.Description>{props.notes}</Card.Description>
                // </Card.Content>
                // </Card>

                <Card>
                    <Image src='/assets/images/avatar/large/daniel.jpg' />
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