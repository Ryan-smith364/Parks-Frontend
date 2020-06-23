import React from 'react';
import { Card, Image, Button, Form, Input, Container} from 'semantic-ui-react'
import {createUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Signup extends React.Component{

   state = {
      newUser:{
         first_name: null,
         last_name: null,
         username: null,
         password: null,
         email: null,
         profile_picture: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_300x300.png'
      }
   }

   handleChange = e => {
      this.setState({ newUser: {
        ...this.state.newUser,
        [e.currentTarget.name]: e.currentTarget.value}
      })
    }

    signUp = () => {
      this.props.history.push('/')
      this.props.createUser(this.state.newUser)
    }
  

  render(){
    return (
         
      <React.Fragment>
         <h1>Sign Up</h1>
         
        <Container>
           
         <Form onSubmit={() => this.signUp()}>
         <Form.Group >
               <Form.Field
               control={Input}
               label='First name'
               placeholder='First name'
               name='first_name'
               onChange={e => this.handleChange(e)}
               required
               />
               <Form.Field
               control={Input}
               label='Last name'
               placeholder='Last name'
               name='last_name'
               onChange={e => this.handleChange(e)}
               required
               />
            </Form.Group>
            <Form.Group>
               <Form.Field
               control={Input}
               label='Username'
               placeholder='Username'
               name='username'
               onChange={e => this.handleChange(e)}
               required
               />
               <Form.Field
               control={Input}
               type='password'
               label='Password'
               placeholder='Password'
               name='password'
               onChange={e => this.handleChange(e)}
               required
               />
            </Form.Group>

            <Form.Group>
               <Form.Field
               id='form-input-control-error-email'
               control={Input}
               label='Email'
               placeholder='username@example.com'
               name='email'
               onChange={e => this.handleChange(e)}
               required
               />
            
            </Form.Group>
            <Form.Group>
               <Card><Image src={this.state.newUser.profile_picture} /></Card>

               <Form.Field
               control={Input}
               label='Avatar link address'
               placeholder='someadress.com/img/avatar.jpg'
               name='profile_picture'
               onChange={e => this.handleChange(e)}
               />
            </Form.Group>

            <Form.Field control={Button}
               type='submit'
            >Submit
            </Form.Field>
                  
         </Form>
        </Container>
      </React.Fragment>
         
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   createUser: (newUser) => {dispatch(createUser(newUser))}
 })
 
 export default withRouter(connect(null, mapDispatchToProps)(Signup));
 

 