import { createAction, props } from "@ngrx/store";
import { Utilisateur } from "../models/Utilisateur.model";

export const Register = createAction('[Auth] Register', props<{ utilisateur: Utilisateur }>());
export const RegisterSuccess = createAction('[Auth] Register Success' , props<{utilisateur : Utilisateur}>());
export const RegisterFailure = createAction('[Auth] Register Failure', props<{ error: string }>());


export const Login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const LoginSuccess = createAction('[Auth] Login Success', props<{ utilisateur: Utilisateur }>());
export const LoginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const LoadLoggedUser = createAction('[Auth] Load Logged User');
export const LoadLoggedUserSuccess = createAction('[Auth] Load Logged User Success', props<{ utilisateur: Utilisateur | null }>());
export const LoadLoggedUserFailure = createAction('[Auth] Load Logged User Failure', props<{ error: string }>());
