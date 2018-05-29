import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import formdata from './formdata';

class App extends Component {
  state = {
    forms: formdata
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