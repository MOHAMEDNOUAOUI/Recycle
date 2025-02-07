import { Demande } from "./demande.model"

export enum Role {
    collector,
    individual
}

export interface Utilisateur {
    firstname?:String
    lastname?:String
    email?:String
    password?:String
    adress?:String
    city?:string
    phone?:String
    birthday?:String
    profile:File
    role?:Role
    demande:Demande[]
}


export interface DemandeResponseUtilisateur {
    firstname?:String
    lastname?:String
    email?:String
    password?:String
    adress?:String
    city?:string
    phone?:String
    birthday?:String
    profile:File
    role?:Role
}
