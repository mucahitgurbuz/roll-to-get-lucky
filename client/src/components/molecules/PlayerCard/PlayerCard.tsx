import { Flex, Image, Text } from 'bumbag'
import React, { useState } from 'react'
import useGlobalStore from '../../../state/globalStore/globalStore'
import Button from '../../atoms/Button/Button'

interface IPlayerCard {
  name: string
  id: string
  imageUrl: string
}

const PlayerCard: React.FC<IPlayerCard> = ({ name, id, imageUrl }) => {
  const [globalState, globalAction] = useGlobalStore()
  const [rollNumber, setRollNumber] = useState(0)
  const player = globalState.players?.filter(player => player.id === id)[0]

  const onRoll = () => {
    const newRollNumber = Math.floor(Math.random() * 6) + 1
    globalAction.setScore(id, newRollNumber)
    setRollNumber(newRollNumber)
    setTimeout(() => {
      setRollNumber(0)
    }, 1000)
  }
  return (
    <Flex
      flexDirection="column"
      width="400px"
      backgroundColor="ghostWhite"
      borderRadius="lg"
      border="thick"
      padding="36px"
      fontSize="16px"
      gap="24px"
      opacity={player?.isActive ? '1' : '0.6'}
    >
      <Text alignSelf="center">{name}</Text>
      <Image
        width="120px"
        height="120px"
        border="grey"
        borderRadius="full"
        alignSelf="center"
        src={imageUrl}
      />
      <Text>Score: {player?.score}</Text>
      {player?.isWinner ? (
        <Text fontWeight="ExtraBlack">WINNER!!!</Text>
      ) : (
        <Button onClick={onRoll} disabled={!player?.isActive || player?.isWinner}>
          {rollNumber ? rollNumber : 'Roll'}
        </Button>
      )}
    </Flex>
  )
}

export default PlayerCard
