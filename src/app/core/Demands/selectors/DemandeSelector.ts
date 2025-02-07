import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DemandeState } from "../reducers/DemandeReducer";

export const State = createFeatureSelector<DemandeState>('Demande');
export const selectDemandes = createSelector(
    State,
    (state:DemandeState) => state.data
)

