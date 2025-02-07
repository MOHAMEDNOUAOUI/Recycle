import { createReducer, on } from "@ngrx/store"
import { Close, LoadStateRecycleComponent, Open } from "../actions/RecycleAction"

export interface RecycleState {
    isVisible:boolean
}
const initialState : RecycleState  = {
    isVisible:false
}

export const RecycleReducer = createReducer(
    initialState,
    on(Open , (state) => ({...state,isVisible:true})),
    on(Close,(state) => ({...state,isVisible:false}))
)