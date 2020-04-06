import React from 'react';
import { Grid, Segment, Container, Image, Dimmer, Loader } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPark} from '../actions/index'
import {Link} from 'react-router-dom'


class Home extends React.Component{
  state = {
    homePark: null
  }

  componentDidMount(){
    const obj = {
      method: 'POST',
      headers:{ 
         'content-type': 'application/json',
         Accept: 'application/json'
      }
   }
  

   fetch('http://localhost:3000/parks/homePark', obj)
   .then(resp => resp.json())
   .then(json => this.setState({ homePark: json }))
   .catch(err => console.warn(err))
  }
  
  render(){

    return (

      <React.Fragment>
            
          <Container>
            <Grid padded>
              <Grid.Row stretched padded='vertically'>
                <Grid.Column width={12} height={20}>
                  <Segment>
                      {this.state.homePark !== null ? <Image src={this.state.homePark.coverPic} id={'park_image'} style={{ marginLeft: 'auto', marginRight: 'auto',  verticalAlign: 'middle' }} alt={this.state.homePark.fullName}/>:      
                      <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                      </Dimmer>} 
                  <Segment onClick={() => this.props.setPark(this.state.homePark)}>
                    {this.state.homePark !== null ? <Link to="/parks/:id" ><p onClick={() => this.props.setPark(this.state.homePark)}> {this.state.homePark.fullName}</p></Link>: null}
                  </Segment>
                  </Segment>
                
                </Grid.Column>
                <Grid.Column width={4} height={20}>
                  <Segment>           
                      <h1>Details</h1>
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
  setPark: (park) => {dispatch(setPark(park))}
})

export default withRouter(connect(null, mapDispatchToProps)(Home));


