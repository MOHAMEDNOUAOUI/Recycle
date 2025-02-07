import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./AppState";
import { RecycleReducer } from "../Recycle/reducers/RecycleReducer";
import { DemandeReducer } from "../Demands/reducers/DemandeReducer";
import { LoginReducer, RegisterReducer } from "../Auth/AuthReducer";

export const reducers:ActionReducerMap<AppState> = {
    RecycleLayoutComponent:RecycleReducer,
    Demande:DemandeReducer,
    Register:RegisterReducer,
    Login:LoginReducer
}