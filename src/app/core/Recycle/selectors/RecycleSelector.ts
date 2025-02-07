import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RecycleState } from "../reducers/RecycleReducer";


export const selectRecycleLayoutState = createFeatureSelector<RecycleState>('RecycleLayoutComponent')

export const selectIsComponentVisible = createSelector (
    selectRecycleLayoutState,
    (state:RecycleState) => state.isVisible
)