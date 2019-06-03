export const SETUP_JOKE = 'SETUP_JOKE'
export const SET_PUNCHLINE = 'SET_PUNCHLINE'


export function setupJoke(setup) {
  return {
    type: SETUP_JOKE,
    payload: {
        setup
    }
  }
}

export function setPunchline(punchline) {
    return {
        type: SET_PUNCHLINE,
        payload: {
            punchline
        }
    }
}