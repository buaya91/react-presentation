import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import presentation from '../../presentation/PresentationReducer'

export default combineReducers({
  counter,
  router: routeReducer,
  presentation
})
