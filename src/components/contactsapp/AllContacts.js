import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

export default class AllContacts extends Component {

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
    render () {
        return(
            <div>
                <h1> All Contacts </h1>
                <ContactsList contacts={this.state.contacts} />
            </div>
        )
    }
}

class ContactsList extends Component {
    render() {
        const contacts = this.props.contacts.map((contact) => (
            <CardExampleHeaderCard
            key = {contact.id}
            id = {contact.id}
            name = {contact.name}
            company = {contact.company}
            notes = {contact.notes}
            />
        ));
        return(
            <div>
            {contacts}
            </div>
        )
    }
}


const CardExampleHeaderCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.company}</Card.Meta>
        <Card.Description>{props.notes}</Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)