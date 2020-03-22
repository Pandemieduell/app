import { createDuelId, deletePendingDuel } from "../controller/Duel";
import AppState from "../state/App";
import CreatedDuel from "../state/PendingDuel";
import PendingDuel from "../state/PendingDuel";
import Duel from "../state/Duel";

export const CREATE_DUEL = "CREATE_DUEL";
export const ADD_PENDING_DUEL = "ADD_PENDING_DUEL";
export const POP_DUEL = "POP_DUEL";
export const SHOW_DUEL = "SHOW_DUEL";
export const DELETE_PENDING_DUEL = "DELETE_PENDING_DUEL";
export const FORGET_PENDING_DUEL = "FORGET_PENDING_DUEL";

export interface CreateDuel {
  type: typeof CREATE_DUEL;
  random: boolean;
}

export interface AddPendingDuel {
  type: typeof ADD_PENDING_DUEL;
  duel: CreatedDuel;
}

export interface ShowDuel {
  type: typeof SHOW_DUEL;
  duel: Duel | PendingDuel;
}

export interface PopDuel {
  type: typeof POP_DUEL;
}

export interface DeletePendingDuel {
  type: typeof DELETE_PENDING_DUEL;
  duel: PendingDuel;
}

export interface ForgetPendingDuel {
  type: typeof FORGET_PENDING_DUEL;
  duel: PendingDuel;
}

export function createDuel(random: boolean) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: CREATE_DUEL, random });
    createDuelId(getState().me.player, random).then(createdDuel =>
      dispatch({ type: ADD_PENDING_DUEL, duel: createdDuel })
    );
  };
}

export function popDuel(): PopDuel {
  return { type: POP_DUEL };
}

export function showDuel(duel: Duel | PendingDuel): ShowDuel {
  return { type: SHOW_DUEL, duel };
}

export function deleteAndForgetPendingDuel(duel: PendingDuel) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: DELETE_PENDING_DUEL, duel });
    deletePendingDuel(getState().me.player, duel.gameId).then(() =>
      dispatch({ type: FORGET_PENDING_DUEL, duel })
    );
  };
}

export type DuelAction =
  | CreateDuel
  | AddPendingDuel
  | PopDuel
  | ShowDuel
  | DeletePendingDuel
  | ForgetPendingDuel;
