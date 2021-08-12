import { Grid, useToasts } from 'bumbag'
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import useGlobalStore from '../../../state/globalStore/globalStore'
import { postGameWinner } from '../../../state/redux/actions/gameInfoActions'
import PlayerCard from '../../molecules/PlayerCard/PlayerCard'

const PlayersBox: React.FC = () => {
  const [globalState, globalAction] = useGlobalStore()
  const toasts = useToasts()
  const dispatch = useDispatch()
  const players = useSelector(state => state.gameInfo.data.players)
  const isLoading = useSelector(state => state.gameInfo.loading)
  const matchId = useSelector(state => state.gameInfo.data.matchId)

  useEffect(() => {
    const winner = globalState.players.filter(player => player.isWinner)
    if (winner.length) {
      dispatch(postGameWinner(matchId, winner[0]?.id))
      toasts.success({
        title: 'WINNER',
        message: `${winner[0]?.name} has won the game!`,
      })
    }
  }, [globalState.players])

  return (
    <Grid
      gridTemplateColumns={{
        default: `repeat(${players ? players.length : 4}, 1fr)`,
        tablet: 'repeat(2,1fr)',
        mobile: 'repeat(1,1fr)',
      }}
      gridColumnGap="24px"
      gridRowGap="20px"
      padding="20px"
      backgroundColor="white"
      marginTop="16px"
      borderRadius="xs"
      altitude="200"
    >
      {isLoading
        ? [...Array(4)].map((each, i) => <Skeleton key={i.toString()} height="200px" />)
        : players.map(player => (
            <PlayerCard key={player.id} name={player.name} id={player.id} imageUrl={player.imageUrl} />
          ))}
    </Grid>
  )
}

export default PlayersBox
