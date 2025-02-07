import { createReducer, on } from "@ngrx/store";
import { Demande } from "../../models/demande.model";
import { LoadDemands } from "../actions/DemandAction";

export interface DemandeState {
    loading:boolean
    data:Demande[]
    error:string
}


export const initialState : DemandeState = {
    loading:false,
    data:[],
    error:''
}

export const DemandeReducer = createReducer(
    initialState,
    on(LoadDemands , (state)=> {
        const localstorageDemandes = localStorage.getItem('demands');
        const demandes:Demande[] = localstorageDemandes ? JSON.parse(localstorageDemandes) : [];

        return {
            ...state,
            loading:true,
            data:demandes,
            error:''
        }
    })
)