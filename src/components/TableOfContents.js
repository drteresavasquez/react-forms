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
            <TOCList items={this.props.forms} />
            </div>
        )
    }
}

// Create all of the list items.
// Accepts props: id, route, title, description
class TOCList extends Component{
  render() {
    const items = this.props.items.map((item) => (
      <ListElement
        key={item.id}
        id={item.id}
        route={item.route}
        title={item.title}
        description={item.description}
      />
    ));
    return (
      <div id='tocitems'>
        {items}
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