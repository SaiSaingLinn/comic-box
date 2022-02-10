import * as types from 'store/types'

const initialState = {
  error: null,
  isLoading: false,
  hide_action: false,
}

const Detail = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_ACTION':
      return {
        ...state,
        hide_action: action.data
      }
    default:
      return state
  }
}

export default Detail