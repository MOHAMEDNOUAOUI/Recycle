import { inject, Inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from "./AuthService";
import { LoadLoggedUser, LoadLoggedUserFailure, LoadLoggedUserSuccess, Login, LoginFailure, LoginSuccess, Register, RegisterFailure, RegisterSuccess } from "./AuthAction";
import { catchError, map, of, switchMap } from "rxjs";
import { Utilisateur } from "../models/Utilisateur.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class AuthEffect{

    register$ = createEffect(() => 
        this.actions$.pipe(
            ofType(Register),
            switchMap(({utilisateur}) => 
                this.authservice.Register(utilisateur).pipe(
                    map((newUser:Utilisateur) => {
                        this.router.navigate(['/login']);
                        return RegisterSuccess({utilisateur:newUser})
                    }),
                    catchError((error) => of(RegisterFailure({error:error.message})))
                )
            )
        )   
    )


    login$ = createEffect(() => {
        return (
            this.actions$.pipe(
                ofType(Login),
                switchMap(({email , password}) => {
                    return (
                        this.authservice.Login(email,password).pipe(
                            map((user:Utilisateur) => {
                                this.router.navigate(['/']);
                                return LoginSuccess({utilisateur:user});
                            }),
                            catchError((error) => {
                                return of(LoginFailure({error:error.message}))
                            })
                        )
                    )
                })
            )
        )
    })


    $user = createEffect(() => {
        return (
            this.actions$.pipe(
                ofType(LoadLoggedUser),
                switchMap(() => 
                    this.authservice.getLoggedUser().pipe(
                        map((utilisateur) => {
                            if(utilisateur){
                                console.log("here");
                                return LoadLoggedUserSuccess({utilisateur})
                            }else{
                                return LoadLoggedUserFailure({error:'No user found'})
                            }
                        })
                    )
                )
            )
        )
    })

    constructor(
        private actions$:Actions,
        private authservice:AuthService , 
        private router:Router
    ){
        console.log('AuthEffect initialized');
    }
}

