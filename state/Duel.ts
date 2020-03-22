import DuelState from "./DuelState";
import PublicPlayer from "./PublicPlayer";
import Round from "./Round";

export default interface Duel {
    gameId: string
    opponent: PublicPlayer
    pandemicPlayer: PublicPlayer,
    governmentPlayer: PublicPlayer,
    state: DuelState,
    currentRoundNumber: number,
    rounds: Round[]
    pending: false
}
