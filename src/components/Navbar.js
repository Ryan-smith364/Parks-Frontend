import React from 'react'
import { Button, Menu, Modal, Image, Sidebar, Icon, Header, Segment} from 'semantic-ui-react';
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
          
          
          <Menu pointing secondary vertical>

              <Menu.Item>
                <Link to="/"> <Button>Home</Button> </Link>
              </Menu.Item>

              <Menu.Item>
                <Link to="/parks"> <Button>Parks</Button> </Link>
              </Menu.Item>

              <Menu.Menu position='middle'>
                <Menu.Item>
                  <h1>parks n stuff</h1>
                </Menu.Item>
              </Menu.Menu>

            <Menu.Menu position='right'>

              <Menu.Item>
                <Link to="/contact"><Button>Contact Me</Button></Link>
              </Menu.Item>


              <Menu.Item>
                { this.props.currentUser !== null ? null : 
                <Modal size={'medium'} trigger={<Button>Sign up</Button>} closeIcon> 
                  <Modal.Content>
                    <Signup/>
                  </Modal.Content>
                </Modal>}
              </Menu.Item>

              <Menu.Item>
                { this.props.currentUser !== null ? <Link to="/profile"><Image src={this.props.currentUser.profile_picture} id={'navProfile'}/></Link> : 
                <Modal  trigger={<Button>Login</Button>} closeIcon> 
                  <Modal.Content>
                    <Login/>
                  </Modal.Content>
                </Modal>}
              </Menu.Item>
            </Menu.Menu>
          </Menu>


        // </React.Fragment>

      )}}
     
  const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
  }
         
  // const mapDispatchToProps = (dispatch) => ({
  //    userLogout: () => {dispatch(userLogout())}
  // })
    
  export default  withRouter(connect(mapStateToProps)(Navbar))