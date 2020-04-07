import React from 'react'
import { Button, Menu, Modal, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import Login from './Login'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Signup from './Signup';
// import {userLogout} from '../actions/index'

 class Navbar extends React.Component{

   render(){
     
      return(



        <React.Fragment>
          
          <Menu.Menu position='right'>

            <Menu.Item onClick={() => this.closeSidebar()}>
              { this.props.currentUser !== null ? null : 
                <Modal size={'medium'} trigger={<Button style={{width: 100}} >Sign up</Button>} closeIcon> 
                  <Modal.Content>
                    <Signup/>
                  </Modal.Content>
                </Modal>
              }
            </Menu.Item>

            <Menu.Item onClick={() => this.closeSidebar()}>
                { this.props.currentUser !== null ?
                  <Link to="/profile">
                    <Image src={this.props.currentUser.profile_picture} id={'navProfile'} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                  </Link> 
                    : 
                  <Modal  trigger={<Button style={{width: 100}} >Login</Button>} closeIcon> 
                    <Modal.Content>
                      <Login/>
                    </Modal.Content>
                  </Modal>
                }
            </Menu.Item>

            </Menu.Menu> 

            <Menu.Item onClick={() => this.closeSidebar()}>
              <Link to="/"> <Button style={{width: 100}}>Home</Button> </Link>
            </Menu.Item>

            <Menu.Item onClick={() => this.closeSidebar()}>
              <Link to="/parks"> <Button style={{width: 100}} >Parks</Button> </Link>
            </Menu.Item>

            <Menu.Item onClick={() => this.closeSidebar()}>
              <Link to="/contact"><Button  style={{width: 100}} >Contact Me</Button></Link>
            </Menu.Item>

         </React.Fragment>

      )}}
     
  const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
  }
         
  // const mapDispatchToProps = (dispatch) => ({
  //    userLogout: () => {dispatch(userLogout())}
  // })
    
  export default  withRouter(connect(mapStateToProps)(Navbar))