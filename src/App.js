import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import Authentication from './components/Authentication';
import Validation from './components/Validation';

class App extends Component {
  state = {
    forms: [
        {
            id: 1,
            component: Authentication,
            title: "Authentication",
            route: "/authentication",
            description: "Using forms for authentication",
        },
        {
            id: 2,
            component: Validation,
            title: "Validation",
            route: "/validation",
            description: "Using forms for authentication",
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
