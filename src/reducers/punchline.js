import {SET_PUNCHLINE} from '../actions/joke'
const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_PUNCHLINE:
        return [...state, ...action.payload]
    default:
      return state
    }
  }
  export default reducer