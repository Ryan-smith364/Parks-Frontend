import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Comment from '../components/Comment.js'
import { Card } from 'semantic-ui-react';



class CommenctSection extends React.Component{
  render(){
    return (
      <React.Fragment>
       <h3>Comments</h3> 
        <Card.Group className="stackable" itemsPerRow={4} style={{overflow: 'auto', maxHeight: 590 }}>
          { this.props.parks !== [] ? this.props.parks.map(comment => <Comment comment={comment}/> ):null  }
        </Card.Group>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return { parks: state.parks}
}

export default withRouter(connect(mapStateToProps)(CommenctSection));