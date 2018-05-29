import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import Authentication from './components/Authentication';

class App extends Component {
  state = {
    forms: [
        {
            id: 1,
            component: Authentication,
            title: "Authentication & Validation",
            route: "/authentication",
            description: "Looking at two levels of validation. 1. The Form and 2. The authentication procedure. Also, looking at the inverse of data up to the authentication component.",
        }
      ]
  }
  render() {
    const forms = this.state.forms.map((form) => (
      <Route 
        key={form.id}
        exact path={form.route} 
        component={() => <form.component />}/>
    ));
    return (
      <div>
              <Route exact path={'/'} component={() => <TableOfContents forms={this.state.forms}/>}/>
              {forms}
      </div>
    );
  }
}

export default App;
