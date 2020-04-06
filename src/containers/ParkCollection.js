import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ParkCard from '../components/ParkCard'
import { Card } from 'semantic-ui-react';



class ListCollection extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Card.Group className="stackable" itemsPerRow={4} style={{overflow: 'auto', maxHeight: 590 }}>
          { this.props.parks !== [] ? this.props.parks.map(park => <ParkCard park={park}/> ):null  }
        </Card.Group>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { parks: state.parks}
}

export default withRouter(connect(mapStateToProps)(ListCollection));