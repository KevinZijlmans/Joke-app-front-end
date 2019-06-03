import {SETUP_JOKE} from '../actions/joke'
const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SETUP_JOKE:
        return [...state, ...action.payload]
    default:
      return state
    }
  }
  export default reducer