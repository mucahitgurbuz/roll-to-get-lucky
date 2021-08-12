import { Flex, Text } from 'bumbag'
import React from 'react'
import { create } from 'react-test-renderer'
import Button from '../Button'

let mockProps

describe('Button', () => {
  it('display primary button with children when no props imported', () => {
    const component = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component.root.findByType(Flex).props.backgroundColor).toBe('primary')
    expect(component.root.findByType(Flex).props.color).toBe('white')
    expect(component.root.findByType(Flex).props.cursor).toBe('pointer')
    expect(component.root.findByType(Flex).props._hover).toStrictEqual({
      backgroundColor: 'primary100',
      color: 'white',
    })
    expect(component.root.findByType(Flex).props.disabled).toBe(undefined)
    expect(component.root.findByType('span').props.children).toEqual('Test')
  })

  it('disables button when disabled props is true', () => {
    mockProps = { ...mockProps, disabled: true }
    const component = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component.root.findByType(Flex).props.cursor).toBe('not-allowed')
    expect(component.root.findByType(Flex).props.disabled).toBe(true)
  })

  it('displays ghost button when isGhost prop is true', () => {
    mockProps = { ...mockProps, isGhost: true }
    const component = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component.root.findByType(Flex).props.backgroundColor).toBe('transparent')
    expect(component.root.findByType(Flex).props.color).toBe('primary')
    expect(component.root.findByType(Flex).props._hover).toStrictEqual({
      backgroundColor: 'transparent',
      color: 'primary100',
    })
  })

  it('get styles with styleProps', () => {
    mockProps = { ...mockProps, styleProps: { fontWeight: 300, margin: '2px' } }
    const component = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component.root.findByType(Flex).props.fontWeight).toBe(300)
    expect(component.root.findByType(Flex).props.margin).toBe('2px')
  })

  it('displays icons in given positions', () => {
    mockProps = { ...mockProps, icon: <Text>Icon</Text>, iconPosition: 'left' }
    const component = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component.root.findAllByType('span')[0].props.children).toEqual('Icon')
    expect(component.root.findAllByType('span')[1].props.children).toEqual('Test')
    mockProps = { ...mockProps, icon: <Text>Icon</Text>, iconPosition: 'right' }
    const component2 = create(
      <Button {...mockProps}>
        <Text>Test</Text>
      </Button>
    )
    expect(component2.root.findAllByType('span')[0].props.children).toEqual('Test')
    expect(component2.root.findAllByType('span')[1].props.children).toEqual('Icon')
  })
})
