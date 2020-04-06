import { combineReducers } from "redux"
import { LOGIN, LOGOUT, FETCH_PARKS, SET_CURRENT_PARK, SET_USER_PARKS,
    ADD_PARK_TO_STORE, REMOVE_PARK_FROM_USER, CLEAR_PARKS_STORE} from './actions/types'



const userReducer = (state = null, action) => {
   switch (action.type) {
      case LOGIN:
         return action.payload
      case LOGOUT:
         return action.payload
   default:
      return state;
   }
}

const parksReducer = (state = null, action) => {
   switch (action.type) {
      case FETCH_PARKS:
         return action.payload
      case CLEAR_PARKS_STORE:
         return action.payload
   default:
      return state;
   }
}

const parkViewReducer = (state = null, action) => {
   switch (action.type) {
      case SET_CURRENT_PARK:
         return action.payload
   default:
      return state;
   }
}

const userParksReducer = ( state = [], action) => {
   switch (action.type) {
      case SET_USER_PARKS:
         return action.payload
      case ADD_PARK_TO_STORE:
         return [...state, action.payload]
      case REMOVE_PARK_FROM_USER: 
         const filter = state.filter(userParks => userParks.id !== action.payload)      
         return filter
      default:
         return state;
   }
   
}



const rootReducer = combineReducers({
   currentUser: userReducer,
   userParks: userParksReducer,
   parks: parksReducer,
   currentPark: parkViewReducer
})

export default rootReducer
