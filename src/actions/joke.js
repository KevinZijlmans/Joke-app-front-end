import request from 'superagent'

export const SETUP_JOKE = 'SETUP_JOKE'
export const SET_PUNCHLINE = 'SET_PUNCHLINE'

const baseUrl = "https://official-joke-api.appspot.com/jokes/programming/random"

const setupJoke = setup => ({
    type: SETUP_JOKE,
    payload: setup
  })
  
  export const loadJoke = () => (dispatch) => {
      request
        .get(`${baseUrl}`)
        .then(response => {
          dispatch(setupJoke(response.body))
        })
          .catch(console.error)
      }