import React from 'react'
import { create, act } from 'react-test-renderer'
import PlayerCard from '../PlayerCard'
import { IGlobalStore } from '../../../../state/globalStore/types'
import { initialState } from '../../../../state/globalStore/globalStore'
import { Image } from 'bumbag'
import Button from '../../../atoms/Button/Button'

let mockProps
let mockGlobalState: IGlobalStore
let mockGlobalActions: any
jest.mock('../../../../state/globalStore/globalStore', () => {
  return jest.fn(() => [mockGlobalState, mockGlobalActions])
})

describe('PlayerCard', () => {
  beforeEach(() => {
    mockProps = { name: 'player-1', id: 'player-1', imageUrl: 'player-1-image-url' }
    mockGlobalState = {
      ...initialState,
      players: [
        {
          id: 'player-1',
          name: 'player-1',
          isActive: true,
          isWinner: false,
          imageUrl: 'player-1-image-url',
          score: 0,
        },
        {
          id: 'player-2',
          name: 'player-2',
          isActive: false,
          isWinner: false,
          imageUrl: 'player-2-image-url',
          score: 12,
        },
      ],
    }
    mockGlobalActions = { setScore: jest.fn() }
  })

  it('passes props correctly', () => {
    const component = create(<PlayerCard {...mockProps} />)
    expect(component.root.findAllByType('span')[0].children).toEqual([mockProps.name])
    expect(component.root.findAllByType(Image)[0].props.src).toBe(mockProps.imageUrl)
    //expect(component.root.findAllByType(PlayerCard)[0]).toBeFalsy()
  })
  it('displays score correctly', () => {
    const component = create(<PlayerCard {...mockProps} />)
    expect(component.root.findAllByType('span')[1].children).toEqual([
      'Score: ',
      mockGlobalState.players[0].score.toString(),
    ])
  })
  it('displays roll button when is not Winner', () => {
    const component = create(<PlayerCard {...mockProps} />)
    expect(component.root.findAllByType(Button)[0]).toBeTruthy()
  })
  it('button is disabled when player is not active or winner', () => {
    const component = create(<PlayerCard {...mockProps} />)
    expect(component.root.findAllByType(Button)[0].props.disabled).toBe(false)
    mockGlobalState = {
      ...mockGlobalState,
      players: [
        {
          id: 'player-1',
          name: 'player-1',
          isActive: false,
          isWinner: false,
          imageUrl: 'player-1-image-url',
          score: 0,
        },
      ],
    }
    const component2 = create(<PlayerCard {...mockProps} />)
    expect(component2.root.findAllByType(Button)[0].props.disabled).toBe(true)
  })
  it('calls setScore when click to button', () => {
    const component = create(<PlayerCard {...mockProps} />)
    act(() => {
      component.root.findByType(Button).props.onClick()
    })
    expect(mockGlobalActions.setScore).toHaveBeenCalled()
  })
})
