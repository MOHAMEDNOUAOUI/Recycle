import { DemandeResponseUtilisateur, Utilisateur } from "./Utilisateur.model"

export enum type_waste_recycle {
    plastique,
    verre,
    papier,
    metal
}
export enum Statut {
    En_Attente,
    Occupée,
    En_Cours,
    Validée,
    Rejetée
}

export interface Demande_Waste {
    statut:type_waste_recycle
    poid:number
}

export interface Demande {
    waste:Demande_Waste[]
    pictures:File[]
    poids:number | 0
    city:string
    collect_adress:String
    date:Date
    statut:Statut
    note:String
    owner:DemandeResponseUtilisateur
}