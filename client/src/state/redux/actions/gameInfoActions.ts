import {
  GET_GAMEINFO,
  GAMEINFO_LOADING,
  GAMEINFO_ERROR,
  POST_GAMEWINNER,
  GAMEWINNER_LOADING,
  GAMEWINNER_ERROR,
} from '../types'
import axios from 'axios'

export const getGameInfo = () => async dispatch => {
  dispatch({ type: GAMEINFO_LOADING })
  try {
    const res = await axios.get(`http://localhost:8001/api/game`)

    dispatch({
      type: GET_GAMEINFO,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: GAMEINFO_ERROR,
      payload: console.log(e),
    })
  }
}

export const postGameWinner = (matchId: string, winnerId: string) => async dispatch => {
  dispatch({ type: GAMEWINNER_LOADING })
  try {
    const res = await axios.post(`http://localhost:8001/api/game`, {
      matchId,
      winnerId,
    })

    console.log(res, 'res')

    dispatch({
      type: POST_GAMEWINNER,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: GAMEWINNER_ERROR,
      payload: console.log(e),
    })
  }
}
