import request from 'superagent'

export const SETUP_JOKE = 'SETUP_JOKE'
export const SET_PUNCHLINE = 'SET_PUNCHLINE'

const setupJoke = setup => ({
    type: SETUP_JOKE,
    setup
  })
  
  export const loadSetup = () => (dispatch, getState) => {
    if (getState().setup) {
      request(`https://official-joke-api.appspot.com/jokes/programming/random`)
        .then(response => {
          dispatch(setupJoke(response.body.setup))
        })
          .catch(console.error)
      }
  }