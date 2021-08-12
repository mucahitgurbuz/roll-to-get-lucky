export interface IGlobalStore {
  players: IPlayer[]
  currentPlayerIndex: number
  scoreToWin: number
}

export interface IGlobalActions {
  clearState: (data: Partial<IGlobalStore>) => void
  setPlayers: (players: IPlayer[]) => void
  setScore: (playerId: string, rollScore: number) => void
  setScoreToWin: (scoreToWin) => void
}

export interface IPlayer {
  isActive: boolean
  isWinner: boolean
  score: number
  id: string
  name: string
  imageUrl: string
}
