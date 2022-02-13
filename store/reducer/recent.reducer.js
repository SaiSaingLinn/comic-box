import { recentStore } from "service"

const initialState = {
  error: null,
  isLoading: false,
  recentData: recentStore.getRecent() ?
    recentStore.getRecent() :
    [],
}

const recent = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RECENT_SEARCH':
      recentStore.setRecent(action.data)
      return {
        ...state,
        recentData: action.data
      }
    default:
      return state
  }
}

export default recent