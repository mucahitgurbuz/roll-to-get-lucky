import { Flex, Text } from 'bumbag'
import { useSelector } from 'react-redux'
import React from 'react'

const Header: React.FC = () => {
  const matchId = useSelector(state => state.gameInfo.data.matchId)
  return (
    <Flex
      height="48px"
      backgroundColor="primary"
      justifyContent={{ default: 'center', mobile: 'flex-start' }}
      alignItems="center"
      position="relative"
      paddingX="32px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary100"
        padding="24px"
        position="absolute"
        right={{ default: '104px', mobile: '0px' }}
        height="100%"
        color="white"
      >
        <Text fontWeight="bold">Match ID: {matchId}</Text>
      </Flex>
    </Flex>
  )
}

export default Header
