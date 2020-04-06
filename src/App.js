import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import { Redirect, Switch, Route, withRouter} from 'react-router-dom'
import HomePage from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import ParksPage from './components/ParksPage';
import SingleParkView from './components/SingleParkView';
import Profile from './components/Profile'
import EditUser from './components/EditUser';
import { Button, Menu, Modal, Image, Sidebar, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom'



class App extends React.Component{

  state = {
    menu: false
  }
  
  showMenu = () => {
    console.log('hit')
    if(this.state.menu === false){
      console.log('hit if')
      this.setState({menu: true})
    }
    else{
      console.log('hit else')
      this.setState({menu: false})
    }
  } 

  closeSidebar = () => {
    console.log('hit')
    if(this.state.menu === true){
      console.log('hit if')
      this.setState({menu: false})
    }
  } 
    


  
  render(){
  
    return (
      <React.Fragment>

<Sidebar.Pushable as={Segment}>

      <Sidebar
        as={Menu}
        icon='labeled'
        inverted
        animation="slide along"
        direction='left'
        vertical
        visible={this.state.menu}
        width='thin'
      >

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

        </Sidebar>
    
        <Sidebar.Pusher 
          onClick={() => this.closeSidebar()}
          dimmed={this.state.menu} 
          direction='scaledown' 
          style={{height: 1000, background: 'rgb(201, 76, 76)'}}
        >
        
        <Button size='large' floated='left' onClick={() => this.showMenu()} icon='align justify' color='black'/>
        
          <h1>Parks N Stuff</h1>
       
         <Switch>

            <Route path='/login' render={() => <Login/>}/>
            <Route path='/edit' render={() => <EditUser/>}/>
            <Route path='/signup' render={() => <Signup/>}/>

            <Route path='/profile' render={() => (this.props.currentUser === null)
              ? <Redirect to='/login' /> 
                  :
                <Profile user={this.props.currentUser} userParks={this.props.userParks}/>}
              />

            <Route path='/contact' render={() => <Contact/>}/>
            <Route path='/parks/:id' render={() => <SingleParkView park={this.props.currentPark}/>}/>
            <Route path='/parks' render={() => <ParksPage/>}/>
            <Route path='/' render={() => <HomePage/>}/>

        </Switch> 

        </Sidebar.Pusher>
      </Sidebar.Pushable>

      </React.Fragment>
    )
  }

}
const mapDispatchToProps = (dispatch) => ({
  
})

const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser,
    userParks: state.userParks,
    currentPark: state.currentPark
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
