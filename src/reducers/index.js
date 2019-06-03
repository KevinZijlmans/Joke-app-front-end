import { combineReducers } from 'redux'
import setup from './setup'
import punchline from './punchline'

export default combineReducers({
  setup,
  punchline
})