import {SETUP_JOKE} from '../actions/joke'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
      case SETUP_JOKE:
        return action.payload
    default:
      return state
    }
  }
  export default reducer