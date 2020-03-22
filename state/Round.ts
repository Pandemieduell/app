import Card from "./Card";
import GameAction from "./GameAction";
import WorldState from "./WorldState";

export default interface Round {
  roundNumber: number,
  availableGovernmentCards: Card[],
  availablePandemicCards: Card[],
  playedCards: Card[],
  executedGameActions: GameAction[]
  worldState: WorldState
}
