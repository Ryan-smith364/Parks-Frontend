import React from 'react';
import { Button, Segment, Container, Image, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {savePark} from '../actions/index'
import ParkMap from './ParkMap'


class SingleParkView extends React.Component{
   state = {
      check: false
   }

   componentDidMount(){
     this.props.userParks.forEach(userPark => {
        console.log( userPark.park, this.props.park)
        console.log(userPark.park.fullName === this.props.park.fullName)
        if (userPark.park.fullName === this.props.park.fullName){
            this.setState({check: true})
        }
     })
   }

 
   render(){
    return (

      <React.Fragment>
            
            <Container>
            <Grid>
               <Grid.Row stretched padded='vertically'>
                  <Grid.Column width={7} >
                     <Segment>
                      <Image src={this.props.park.image} style={{ marginLeft: 'auto', marginRight: 'auto',  verticalAlign: 'middle' }}/>

                     <br/>

                      {this.props.currentUser ? (
                            this.state.check ? 
                              <Button >
                                 Park Saved 
                              </Button> :
                        <Button 
                                onClick={() => {
                                 console.log('saved', this.props.park.fullName)
                                 this.props.savePark(this.props.park, this.props.currentUser.id)
                                 this.setState({check: true})
                                }
                              }
                              
                        >
                           Save Park
                        </Button> )
                        :
                        null}

                     </Segment>
                     <Segment>
                     <h4> {this.props.park.fullName}: {this.props.park.states} </h4>
                      <p>Description: {this.props.park.description}</p>
            
                     </Segment>
                  </Grid.Column>
                  <Grid.Column width={8} >
                     <Segment>
                     <p>Weather: {this.props.park.weatherInfo}</p>
                      <p>Directions: {this.props.park.directionsInfo}</p>
                      <p>Hours: {this.props.park.operatingHours}</p>
                    
                     </Segment>
                     <Segment>
                      <a style={{display: "table-cell"}} href={this.props.park.url} target="_blank">Visit the {this.props.park.fullName} Website</a>

                        
                        <br/>
                        
                        <ParkMap park={this.props.park}/>

                        <br/>
                  
                        

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
   savePark: (park, user) => {dispatch(savePark(park, user))}
 })

 const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    userParks: state.userParks
 })
 
 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleParkView));
 
 
 