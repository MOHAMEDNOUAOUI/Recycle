import { createReducer, on } from "@ngrx/store"
import { Utilisateur } from "../models/Utilisateur.model"
import { LoadLoggedUser, Login, LoginFailure, LoginSuccess, Register, RegisterFailure, RegisterSuccess } from "./AuthAction"

export interface RegisterState {
    loading:boolean
    data:Utilisateur[]
    error:string
}

export interface LoginState {
    loading:boolean
    data:Utilisateur | null
    error:string
}

export const RegisterState : RegisterState = {
    loading:false,
    data:[],
    error:''
}

export const LoginState : LoginState =  {
    loading:false,
    data:null,
    error:''
}

export const RegisterReducer = createReducer(
    RegisterState,

    on(Register, (state) => ({
        ...state,
        loading: true,
        error: ''
    })),

    on(RegisterSuccess, (state, { utilisateur }) => ({
        ...state,
        loading: false,
        data: [...state.data, utilisateur],
        error: ''
    })),

    on(RegisterFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    }))
);


export const LoginReducer = createReducer(
    LoginState,

    on(Login, (state) => ({
        ...state,
        loading: true,
        error: ''
    })),

    on(LoginSuccess, (state, { utilisateur }) => ({
        ...state,
        loading: false,
        data: utilisateur,
        error: ''
    })),

    on(LoginFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    }))
);