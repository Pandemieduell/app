import PendingDuel from "./PendingDuel";
import Duel from "./Duel";

export default interface DuelContainer {
    visible?: Duel | PendingDuel
    pending: PendingDuel[]
    started: Duel[]
}
