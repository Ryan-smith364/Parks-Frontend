import React from 'react';
import { Card, Image, Button, Form, Input, Container} from 'semantic-ui-react'
import {updateUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class editUser extends React.Component{

   state = {
      changedUser:{
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        username: this.props.currentUser.username,
        password: null,
        email: this.props.currentUser.email,
        profile_picture: this.props.currentUser.profile_picture
      }
    }

   handleChange = e => {
      this.setState({ changedUser: {
        ...this.state.changedUser,
        [e.currentTarget.name]: e.currentTarget.value}
      })
    }

  render(){
    return (
         
      <React.Fragment>
         <h1>Edit User</h1>
         
        <Container>
           
         <Form onSubmit={() => this.props.updateUser(this.state.changedUser, this.props.currentUser.id)}>
         <Form.Group >
               <Form.Field
               control={Input}
               label='First name'
               placeholder='First name'
               name='first_name'
               onChange={e => this.handleChange(e)}
               value={this.state.changedUser.first_name}
               required
               />
               <Form.Field
               control={Input}
               label='Last name'
               placeholder='Last name'
               name='last_name'
               onChange={e => this.handleChange(e)}
               value={this.state.changedUser.last_name}
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
               value={this.state.changedUser.username}
               required
               />
               <Form.Field
               control={Input}
               type='password'
               label='Password'
               placeholder='Password'
               name='password'
               onChange={e => this.handleChange(e)}
               value={this.state.changedUser.password}
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
               value={this.state.changedUser.email}
               required
               />
            
            </Form.Group>
            <Form.Group>
               <Card><Image src={this.state.changedUser.profile_picture} /></Card>

               <Form.Field
               control={Input}
               label='Avatar link address'
               placeholder='someadress.com/img/avatar.jpg'
               name='profile_picture'
               onChange={e => this.handleChange(e)}
               value={this.state.changedUser.profile_picture}
               required
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
   updateUser: (changedUser, userId) => {dispatch(updateUser(changedUser, userId))}
 })

 const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})


 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(editUser));
 

 