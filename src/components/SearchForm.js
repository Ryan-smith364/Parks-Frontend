import React from 'react';
import { Input, Form } from 'semantic-ui-react'
import {search} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class SearchForm extends React.Component{

   state = {
      search: ""
   }

   handleChange = e => {

    console.log(e.currentTarget.value)
    this.setState({ search: e.currentTarget.value.toLowerCase() })
  }

  componentDidMount(){
    this.props.search('')

  }

  render(){
   

    return (

      <React.Fragment>
            
            <Form onSubmit={() => this.props.search(this.state.search)}> 
            
              <Input icon='search' placeholder='Search...' onChange={e => this.handleChange(e)}/>
              
            </Form>


       
      </React.Fragment>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (term) => {dispatch(search(term))}
})

export default withRouter(connect(null, mapDispatchToProps)(SearchForm));
