import React from 'react'
import globalHook, { Store } from 'use-global-hook'
import { IPlayer, IGlobalActions, IGlobalStore } from './types'

export const initialState: IGlobalStore = {
  players: [],
  currentPlayerIndex: 0,
  scoreToWin: 0,
}

const actions: object = {
  clearState: (store: Store<IGlobalStore, IGlobalActions>, data: Partial<IGlobalStore>) => {
    store.setState({ ...store.state, ...data })
  },
  setPlayers: (store: Store<Partial<IGlobalStore>, IGlobalActions>, players: IPlayer[]) => {
    store.setState({ ...store.state, players })
  },
  setScore: (store: Store<Partial<IGlobalStore>, IGlobalActions>, playerId: string, rollScore: number) => {
    let isThereAWinner = false
    const newCurrentPlayerIndex =
      store.state.currentPlayerIndex === store.state.players.length - 1
        ? 0
        : store.state.currentPlayerIndex + 1
    const updatedPlayers = store.state.players.map((player, index) => {
      if (player.id === playerId) {
        let isWinner = false
        const newScore = player.score + rollScore
        if (newScore >= store.state.scoreToWin) {
          isWinner = true
          isThereAWinner = true
        }
        return { ...player, isActive: isWinner, isWinner: isWinner, score: newScore }
      }
      return { ...player, isActive: isThereAWinner ? false : newCurrentPlayerIndex === index }
    })
    store.setState({
      ...store.state,
      players: updatedPlayers,
      currentPlayerIndex: isThereAWinner ? store.state.currentPlayerIndex : newCurrentPlayerIndex,
    })
  },
  setScoreToWin: (store: Store<Partial<IGlobalStore>, IGlobalActions>, scoreToWin: number) => {
    store.setState({ ...store.state, scoreToWin })
  },
}

const useGlobalStore = globalHook<IGlobalStore, IGlobalActions>(React, initialState, actions)

export default useGlobalStore
