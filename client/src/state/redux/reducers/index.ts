import { combineReducers } from 'redux'
import gameInfoReducer from './gameInfo'

export default combineReducers({
  gameInfo: gameInfoReducer,
})
