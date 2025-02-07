import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Utilisateur } from "../models/Utilisateur.model";
import { LoginState } from "./AuthReducer";

export const AuthentificationUserState = createFeatureSelector<LoginState>('Login');
export const LoggedUser = createSelector(
    AuthentificationUserState,
    (state:LoginState) => state.data   
)
export const Role = createSelector(
    AuthentificationUserState,
    (state :LoginState) => state.data?.role
)