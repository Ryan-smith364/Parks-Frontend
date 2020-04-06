import React from 'react'
import {Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {setPark} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

 class ParkCard extends React.Component{

   render(){
     
      return(

        <React.Fragment>
          <Card> 
            <Image src={this.props.park.coverPic} wrapped ui={false} />
            <Card.Content>
              <Link to={`/parks/${this.props.park.id}`} onClick={() => this.props.setPark(this.props.park)}><Card.Header>{this.props.park.fullName}</Card.Header></Link>
              <Card.Meta>
                
              </Card.Meta>
              <Card.Description style={{overflow: 'auto', maxHeight: 250 }}>
                {this.props.park.description}
              </Card.Description>
            </Card.Content>
          </Card>


        </React.Fragment>

      )}}
     
      const mapDispatchToProps = (dispatch) => ({
        setPark: (park) => {dispatch(setPark(park))}
      })
      
      export default withRouter(connect(null, mapDispatchToProps)(ParkCard));