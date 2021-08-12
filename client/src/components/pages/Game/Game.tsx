import { Flex, Text } from 'bumbag'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGlobalStore from '../../../state/globalStore/globalStore'
import { getGameInfo } from '../../../state/redux/actions/gameInfoActions'
import InfoBadge from '../../atoms/InfoBadge/InfoBadge'
import PlayersBox from '../../organisms/PlayersBox/PlayersBox'

const Game: React.FC = () => {
  const [globalState, globalAction] = useGlobalStore()
  const dispatch = useDispatch()
  const scoreToWin = useSelector(state => state.gameInfo.data.scoreToWin)
  const players = useSelector(state => state.gameInfo.data.players)
  useEffect(() => {
    if (players) {
      globalAction.setScoreToWin(scoreToWin)
      globalAction.setPlayers(
        players.map((player, index) => ({ isActive: index === 0, isWinner: false, score: 0, ...player }))
      )
    } else {
      dispatch(getGameInfo())
    }
  }, [players])
  return (
    <Flex
      paddingY="64px"
      paddingX={{ default: '104px', tablet: '64px', mobile: '32px' }}
      alignItems="center"
      flexDirection="column"
      gap="48px"
    >
      <Text fontWeight="ExtraBlack" fontSize="64px" color="primary100">
        Roll to Get Lucky
      </Text>
      <InfoBadge title="Score to win" content={scoreToWin} />
      <PlayersBox />
    </Flex>
  )
}

export default Game
