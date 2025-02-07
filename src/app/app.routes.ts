import { Routes } from '@angular/router';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { CollectorLayoutComponent } from '../Layouts/collector-layout/collector-layout.component';
import { ParticulierLayoutComponent } from '../Layouts/particulier-layout/particulier-layout.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { RecycleLayoutComponent } from '../Layouts/recycle-layout/recycle-layout.component';
import { FakeData } from './core/fakedata/FakeData';
import { authGuard } from './core/guards/auth-guard.guard';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { ProfileLayoutComponent } from '../Layouts/profile-layout/profile-layout.component';

export const routes: Routes = [
    {path:'' , component:CollectorLayoutComponent ,
        canActivate:[authGuard], 
    children:[
        {path:'' , component:HomePageComponent}
    ]
    },
    {path:'Particulier' , component:ParticulierLayoutComponent, },
    {path:'register' , component:RegisterPageComponent },
    {path:'login' ,component:LoginPageComponent},
    {path:'data' , component:FakeData},
    {path:'profile' , component:ProfileLayoutComponent , canActivate:[authGuard],
        children:[
            {path:'' , component:ProfilePageComponent},
        ]
    }
];
