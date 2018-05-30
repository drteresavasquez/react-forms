import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import GetContact from './GetContact';


export default class AllContacts extends Component{
    state = {
        contacts:[]
    }

    componentDidMount(){
        const storedUser = sessionStorage.getItem("user");
        
        if(storedUser){
            const storedUserObj = JSON.parse(storedUser);
            this.loadContacts(storedUserObj.id)
        }else{
            this.loadContacts(this.props.user.id)
        }
        
    }

    loadContacts = (id) => {
        fetch(`http://localhost:4000/contacts?ownerID=${id}`)
        .then((data)=>{
            return data.json();
        }).then((userContacts)=>{
            this.setState({
                contacts: userContacts
            })
            console.log(userContacts)
        })
    }

    deleteContact = (id) => {
        return fetch(`http://localhost:4000/contacts/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((response) => {
                const storedUser = sessionStorage.getItem("user");
                const storedUserObj = JSON.parse(storedUser);
                this.loadContacts(storedUserObj.id);
            })
    }

    render(){
        return(
            <div>
            <h2>All Contacts</h2>
                    <ContactsList contacts={this.state.contacts} deleteContact={this.deleteContact}/>
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
                rating={contact.rating}
                phone={contact.phone}
                deleteContact={this.props.deleteContact}
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


class CardExampleHeaderCard extends Component{
    render(){
        return(
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={this.props.image} />
                    <Card.Header>
                    <Link to={`/contactsapp/${this.props.id}`}>{this.props.name} ({this.props.company}) </Link>
                    </Card.Header>AllCon
                    <Card.Meta>  
                    <Button 
                        size='mini' 
                        color='red'
                        onClick={()=>{this.props.deleteContact(this.props.id)}}
                    >
                        Delete Contact                       
                    </Button>
                    </Card.Meta>
                    <Card.Description>
                    <strong>{this.props.notes}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui four buttons'>
                    <Button basic color='green' icon="call" href={`tel:${this.props.phone}`}></Button>
                    <Button basic color='green' icon="talk" href={`sms:${this.props.phone}`}></Button>
                    <Button basic color='blue' icon="mail" href={`mailto:${this.props.email}`}></Button>
                    <Button basic color='orange' as={Link} to={`/contactsapp/${this.props.id}`}>Edit</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}