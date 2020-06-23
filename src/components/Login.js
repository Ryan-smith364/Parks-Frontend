import React from 'react';
import { Button, Form, Input, Container, } from 'semantic-ui-react'
import {findUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

  class Login extends React.Component{

   state = {
      user: {
         username: null,
         password: null
      }
   }

   login = ( ) => {
      this.props.history.push('/')
      this.props.findUser(this.state.user)
   }

   handleChange = (e) => {
      this.setState({user:{
         ...this.state.user,
         [e.currentTarget.name]: e.currentTarget.value}
      })
   }

  render(){
    return (
      <React.Fragment>
        <Container>
           <h1> Login </h1>
         <Form onSubmit={() => this.login()}>
            <Form.Group widths='equal'>
               <Form.Field
                  name="username"
                  control={Input}
                  label='Username'
                  placeholder='Username'
                  onChange={e => this.handleChange(e)}
                  required
               >
               </Form.Field>
               <Form.Field
                  name='password'
                  control={Input}
                  type='password'
                  label='Password'
                  placeholder='Password'
                  onChange={e => this.handleChange(e)}
                  required
               >
               </Form.Field>

               </Form.Group>
               <Form.Group>
            
               <Form.Field
                  control={Button}
                  type='submit'
               >Submit
               </Form.Field>
               
            </Form.Group>
         </Form>
        </Container>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   findUser: (newUser) => {dispatch(findUser(newUser))}
 })
 
 export default withRouter(connect(null, mapDispatchToProps)(Login));
 