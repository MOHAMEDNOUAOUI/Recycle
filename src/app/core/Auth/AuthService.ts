import { Injectable } from "@angular/core";
import { Utilisateur } from "../models/Utilisateur.model";
import { Observable, of, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    private users:Utilisateur[] = JSON.parse(localStorage.getItem('utilisateurs') || "[]");

    Register(utilisateur:Utilisateur) : Observable<Utilisateur> {
        const exist = this.users.find(user => user.email == utilisateur.email);
        if(exist){
            return throwError(() => new Error("Email already exist!"));
        }
        this.users.push(utilisateur);
        localStorage.setItem('utilisateurs' , JSON.stringify(this.users));
        return of(utilisateur);
    }

    Login(email:string , password:string) : Observable<Utilisateur> {
        const extist = this.users.find(user => user.email==email && user.password==password);
        if(!extist){
            return throwError(() => new Error("Invalid email or password!"));
        }
        localStorage.setItem('loggedUser' , JSON.stringify(extist));
        return of(extist);
    }

    isAuthenticated() : boolean {
        return !!localStorage.getItem('loggedUser');
    }

    getLoggedUser() : Observable<Utilisateur | null> {
        const user = localStorage.getItem('loggedUser');
        if(user){
            return of(JSON.parse(user) as Utilisateur)
        }

        return of(null);
    }

    setLoggedUser(user: Utilisateur): void {
        localStorage.setItem('loggedUser', JSON.stringify(user));
      }
    
    clearLoggedUser(): void {
        localStorage.removeItem('loggedUser');
    }
}