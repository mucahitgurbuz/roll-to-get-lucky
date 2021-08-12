import React from 'react'
import { create, act } from 'react-test-renderer'
import { useSelector } from 'react-redux'
import PlayersBox from '../PlayersBox'
import Skeleton from 'react-loading-skeleton'
import PlayerCard from '../../../molecules/PlayerCard/PlayerCard'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

const mockState = {
  gameInfo: {
    data: {
      players: [],
      matchId: 'testId',
    },
    loading: true,
  },
}

describe('PlayersBox', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  it('shows skelatons when is loading', () => {
    const component = create(<PlayersBox />)
    expect(component.root.findAllByType(Skeleton).length).toBe(4)
    expect(component.root.findAllByType(PlayerCard)[0]).toBeFalsy()
  })

  it('maps players with correct player infos', () => {
    const localState = {
      ...mockState,
      gameInfo: {
        ...mockState.gameInfo,
        data: {
          ...mockState.gameInfo.data,
          players: [
            { id: 'id-1', name: 'name-1', imageUrl: 'image-1' },
            { id: 'id-2', name: 'name-2', imageUrl: 'image-2' },
          ],
        },
        loading: false,
      },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<PlayersBox />)
    expect(component.root.findAllByType(Skeleton)[0]).toBeFalsy()
    expect(component.root.findAllByType(PlayerCard).length).toBe(2)
    expect(component.root.findAllByType(PlayerCard)[0].props.id).toBe(localState.gameInfo.data.players[0].id)
    expect(component.root.findAllByType(PlayerCard)[0].props.name).toBe(
      localState.gameInfo.data.players[0].name
    )
    expect(component.root.findAllByType(PlayerCard)[0].props.imageUrl).toBe(
      localState.gameInfo.data.players[0].imageUrl
    )
    expect(component.root.findAllByType(PlayerCard)[1].props.id).toBe(localState.gameInfo.data.players[1].id)
    expect(component.root.findAllByType(PlayerCard)[1].props.name).toBe(
      localState.gameInfo.data.players[1].name
    )
    expect(component.root.findAllByType(PlayerCard)[1].props.imageUrl).toBe(
      localState.gameInfo.data.players[1].imageUrl
    )
  })
})
