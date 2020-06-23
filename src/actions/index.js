import {LOGIN ,LOGOUT, FETCH_PARKS,
        SET_CURRENT_PARK, SET_USER_PARKS,
        ADD_PARK_TO_STORE, REMOVE_PARK_FROM_USER,
         CLEAR_PARKS_STORE} from './types'



function createUser(user){
   return (dispatch) => {

      const obj = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
         },
         body: JSON.stringify({user})
       }
       
       fetch('http://localhost:3000/users', obj)
       .then(res => res.json())
       .then(user => {dispatch(loginUser(user))})
       .catch(err => console.warn(err))
   }
}

function search(term){
   return (dispatch) => {
      dispatch(clearParks())

      const obj = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
         },
         body: JSON.stringify({term})
       }
       
       fetch('http://localhost:3000/parks/search', obj)
       .then(res => res.json())
       .then(parks => {dispatch(searchParks(parks))})
       .catch(err => console.warn(err))
   }
}

function findUser(user){
   return(dispatch ) => {
      const obj = {
         method: 'POST',
         headers:{ 
            'content-type': 'application/json',
            Accept: 'application/json'
      },
      body: JSON.stringify({username: user.username, password: user.password})
      }

      fetch('http://localhost:3000/users/login', obj)
      .then(resp => resp.json())
      .then(user =>  {
         if('error' in user){
            alert("Username or Password is Incorrect")
         }
         else{
            
            dispatch(loginUser(user))  
            dispatch(setUserParks(user.users_parks))
         }
      })
      .catch(err => console.warn(err))
   }
}

function updateUser(userObj, userId){

  
return (dispatch) => {
  
      const obj = {
         method: 'PATCH',
         headers:{ 
            'content-type': 'application/json',
            'Accept': 'application/json'
         },body: JSON.stringify({userObj})
      }
      
      fetch(`http://localhost:3000/users/${userId}`, obj) 
      .then(resp => resp.json())
      .then(userObj => {dispatch(loginUser(userObj))}) 
      .catch(err => console.warn(err))
   }
}

function savePark(park, userId){

   return (dispatch) => {

      const obj = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
         },
         body: JSON.stringify({user_id: userId, park_id: park.id})
       }
       
       fetch(`http://localhost:3000/users_parks`, obj)
       .then(res => res.json())
       .then(json => {dispatch(addParkToUserParks(json))})
       .catch(err => console.warn(err))
   }
}

function removePark(join){
   return (dispatch) => {

      const obj = {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
         },
         body: JSON.stringify({join})
       }
       
       fetch(`http://localhost:3000/users_parks/${join.id}`, obj)
       .then(res => res.json())
       .then(json => {dispatch(removeParkFromUser(json))})
       .catch(err => console.warn(err))
   }

}


function userLogout(){
   return{ type: LOGOUT, payload: null }
}

function clearParks() {
   return{type: CLEAR_PARKS_STORE, payload: null}
}

function loginUser(user){
   return{ type: LOGIN, payload: user }
}

function searchParks(parks){
   return{ type: FETCH_PARKS, payload: parks}
}

 function setPark(park){
    return{ type:SET_CURRENT_PARK, payload: park}
 }

 function setUserParks(parks){
    return{ type: SET_USER_PARKS, payload: parks}
 }

 function addParkToUserParks(park){
    return{type: ADD_PARK_TO_STORE, payload: park}
 }

 function removeParkFromUser(json){
    return{type: REMOVE_PARK_FROM_USER, payload: json.id}
 }
 


 export { createUser, findUser, userLogout, updateUser, search, setPark, savePark, removePark}