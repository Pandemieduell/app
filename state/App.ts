import Me from "./Me";
import Duel from "./Duel";

export default interface AppState {
    me: Me,
    duels: Duel[]
}
