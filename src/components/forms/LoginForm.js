import React from 'react'
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'

export default class LoginForm extends React.Component{
  state = {
    fields: {
      password: '',
      email: ''
    },
    fieldErrors: {},
  }

  onFormSubmit = evt => {
    const user = this.state.fields;
    const fieldErrors = this.validate(user);
    this.setState({fieldErrors});
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    /********* PLACE INVERSE DATA FLOW HERE ************/
      this.props.sendDeets(evt.target.id, user.email, user.password);
    
      evt.preventDefault();
  };

  validate = user => {
    const errors = {};
    if (!user.email) errors.email = 'Email Required';
    if (!user.password) errors.password = 'Password Required';
    return errors;
  };

  onInputChange = evt => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  render(){
    return(
      <div className='login-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
          <i className="fa fa-money fa-5x"></i><br /> Log-in to your account
          </Header>
          <span style={{color: 'red'}}>{this.props.errorMessage}</span>
          <Form size='large' 
          // onSubmit={this.onFormSubmit}
          >
            <Segment stacked>
            <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
              <Form.Input
                fluid
                name="email"
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                type='email'
                onChange={this.onInputChange}
              />
               <span style={{color: 'red'}}>{this.state.fieldErrors.password}</span>
              <Form.Input
                fluid
                name="password"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.onInputChange}
              />
              {/* <Button color='green' fluid size='large'>Login</Button> */}
              <LoginButtons onFormSubmit={this.onFormSubmit}/>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    );
  };

}

const LoginButtons = (props) => (
  <Segment padded>
    <Button id="login" positive fluid
    onClick={props.onFormSubmit}>Login</Button>
    <Divider horizontal>Or</Divider>
    <Button id="signup" secondary fluid
    onClick={props.onFormSubmit}>Sign Up Now</Button>
  </Segment>
)
