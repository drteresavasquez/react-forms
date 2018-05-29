import React, { Component } from 'react';
import './TableOfContents.css';
import { List, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Accepts forms as props from App.js
export default class TableOfContents extends Component{
    render(){
        return(
            <div className="tableofcontents">
            <h2>React Forms - Table of Contents</h2>
            <TOCList forms={this.props.forms} />
            </div>
        )
    }
}

// Create all of the list items.
// Accepts props: id, route, title, description
class TOCList extends Component{
  render() {
    const forms = this.props.forms.map((form) => (
      <ListElement
        key={form.id}
        id={form.id}
        route={form.route}
        title={form.title}
        description={form.description}
      />
    ));
    return (
      <div id='tocitems'>
        {forms}
      </div>
    );
}
}

// Styling element for the list items
class ListElement extends Component{
    render(){
        return(
            <List divided relaxed>
                <List.Item>
                    <List.Icon name='wpforms' size='large' verticalAlign='middle' />
                    <List.Content>
                    <List.Header as={Link} to={this.props.route}>{this.props.title}</List.Header>
                    <List.Description as='a'>{this.props.description}</List.Description>
                    </List.Content>
                </List.Item>
                <Divider section />
            </List>
        )
    }
}