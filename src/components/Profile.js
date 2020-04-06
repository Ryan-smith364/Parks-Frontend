import React from 'react';
import { Grid, Segment, Container, Button, Modal} from 'semantic-ui-react'
import {removePark, setPark, userLogout} from '../actions/index'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import EditUser from './EditUser';

class Profile extends React.Component{
  
  render(){

    return (

      <React.Fragment>
            
            <h1>{this.props.user.username}</h1>
          <Container>
            <Grid padded>
              <Grid.Row stretched padded='vertically'>
                <Grid.Column width={12} height={20}>
    { this.props.userParks !== [] ? this.props.userParks.map(usersPark => <Segment><Link to={`/parks/${usersPark.park.id}`} onClick={() => this.props.setPark(usersPark.park)}><p>{usersPark.park.fullName}</p></Link><Button onClick={() => this.props.removePark(usersPark)}>X</Button></Segment> ):null  }
                
                </Grid.Column>
                <Grid.Column width={4} >
                  <Segment>
                    <Modal size={'medium'} trigger={<Button>Edit Profile</Button>} closeIcon> 
                      <Modal.Content>
                        <EditUser/>
                      </Modal.Content>
                    </Modal>
                    <Button onClick={() => this.props.userLogout()}>Logout</Button>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
       
      </React.Fragment>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePark: (park) => {dispatch(removePark(park))},
  setPark: (park) => {dispatch(setPark(park))},
  userLogout: () => {dispatch(userLogout())}
})



export default withRouter(connect(null, mapDispatchToProps)(Profile));

