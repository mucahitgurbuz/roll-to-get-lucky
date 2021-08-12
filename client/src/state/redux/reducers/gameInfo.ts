import { GET_GAMEINFO, GAMEINFO_LOADING, POST_GAMEWINNER, GAMEWINNER_LOADING } from '../types'

const initialState = {
  data: {},
  postWinner: false,
  loading: true,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMEINFO:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case GAMEINFO_LOADING:
      return {
        ...state,
        loading: true,
      }
    case POST_GAMEWINNER:
      return {
        ...state,
        postWinner: action.payload.success,
        loading: false,
      }
    case GAMEWINNER_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
