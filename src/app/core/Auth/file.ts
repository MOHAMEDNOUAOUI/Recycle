import { createReducer, on } from "@ngrx/store"
import { Utilisateur } from "../models/Utilisateur.model"
import { LoadLoggedUser, Login, Register } from "./AuthAction"

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
  on(Register , (state , {utilisateur}) => {
    const localstorage = localStorage.getItem('utilisateurs');
    let users :Utilisateur[] = localstorage ? JSON.parse(localstorage) : [];

    const existUser = users.find(user => user.email === utilisateur.email);

    if(existUser) {
        return {
            ...state,
            loading:false,
            error:'Email already exist!'
        }
    }
    users.push(utilisateur);
    localStorage.setItem('utilisateurs' , JSON.stringify(users));

    return {
        ...state,
        loading:true,
        data:users,
        error:''
    }
  })
)


export const LoginReducer = createReducer(
    LoginState,
    on(Login , (state , {email,password}) => {
        const localstorage = localStorage.getItem('utilisateurs');
        let users : Utilisateur[] = localstorage ? JSON.parse(localstorage) : [];

        const loggedUser = users.find(user => user.email === email && user.password === password);

        if (!loggedUser) {
            return {
              ...state,
              loading: false,
              error: 'Invalid email or password!'
            };
        }

        localStorage.setItem('loggedUser' , JSON.stringify(loggedUser));

        return {
            ...state,
            loading:true,
            data:loggedUser,
            error:''
        }
      }),
      on(LoadLoggedUser , (state) => {
        const LoginUser = localStorage.getItem('loggedUser');
        const user : Utilisateur = LoginUser ? JSON.parse(LoginUser) : null;
        if(!user) {
            return {
                ...state,
                loading:false,
                error:'This Utilisateur doesnt exist'
            }
        }

        return {
            ...state,
            loading:true,
            data:user,
            error:''
        }

      })
)