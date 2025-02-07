import { AuthEffect } from "../Auth/AuthEffect"
import { LoginState, RegisterState } from "../Auth/AuthReducer"
import { DemandeState } from "../Demands/reducers/DemandeReducer"

export interface AppState {
    RecycleLayoutComponent:any
    Demande:DemandeState
    Register:RegisterState
    Login:LoginState
}

export interface AppEffects {
    AuthEffect:AuthEffect
}