import React from 'react'
import {Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {setPark} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

 class Comment extends React.Component{

   render(){
     
      return(

        <React.Fragment>
         <p>hello </p>
        </React.Fragment>

      )}}
     
      const mapDispatchToProps = (dispatch) => ({
        setPark: (park) => {dispatch(setPark(park))}
      })
      
      export default withRouter(connect(null, mapDispatchToProps)(Comment));