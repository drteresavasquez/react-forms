import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import Authentication from './components/Authentication';
import Basic from './components/Basic';
import BasicForm from './components/forms/BasicForm';


class App extends Component {
  state = {
    forms: [
        {
            id: 1,
            component: Basic,
            title: "Basic form w/Inverse Data Flow",
            route: "/basic",
            description: "Looking at two levels of validation. 1. The Form and 2. The authentication procedure. Also, looking at the inverse of data up to the authentication component.",
        },
        {
            id: 2,
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
              <Route exact path={'/basicform'} component={() => <BasicForm />}/>
              {forms}
      </div>
    );
  }
}

export default App;
