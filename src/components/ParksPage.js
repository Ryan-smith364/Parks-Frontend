import React from 'react';
// import { Button, Segment, Container, Header, Image } from 'semantic-ui-react'
import SearchForm from './SearchForm'
import { Container, Loader, Dimmer, Segment } from 'semantic-ui-react';
import ParkCollection from '../containers/ParkCollection'
import {connect} from 'react-redux'

class ParksPage extends React.Component{
  
  render(){

    return (

      <React.Fragment>
            
        <SearchForm />

        <br/>

        <Container>
            { 
            this.props.parks === null ? 
              <Segment style={{height : 590}}> 
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer> 
              </Segment>

              :
              ( this.props.parks !== [] ?
              <ParkCollection/> : <Segment><h1> No Parks Found </h1> </Segment>)
              }
        </Container>
             

      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return { parks: state.parks}
}
export default connect(mapStateToProps)(ParksPage)

