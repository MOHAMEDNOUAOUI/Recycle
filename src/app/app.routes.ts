import { Routes } from '@angular/router';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { CollectorLayoutComponent } from '../Layouts/collector-layout/collector-layout.component';
import { ParticulierLayoutComponent } from '../Layouts/particulier-layout/particulier-layout.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { RecycleLayoutComponent } from '../Layouts/recycle-layout/recycle-layout.component';
import { FakeData } from './core/fakedata/FakeData';
import { authGuard, roleGuard } from './core/guards/auth-guard.guard';

export const routes: Routes = [
    {path:'' , component:CollectorLayoutComponent ,
        canActivate:[authGuard , roleGuard], 
    children:[
        {path:'' , component:HomePageComponent}
    ]
    },
    {path:'Particulier' , component:ParticulierLayoutComponent , canActivate:[authGuard , roleGuard], },
    {path:'register' , component:RegisterPageComponent , canActivate:[roleGuard]},
    {path:'login' ,component:LoginPageComponent , canActivate:[roleGuard]},
    {path:'data' , component:FakeData},
];
