import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignupComponent } from "./user/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { AirComponent } from "./air/air/air.component";
import { UpdateComponent } from "./air/update/update.component";

export const appRoutes: Routes = [{
    path: 'signup', component: SignupComponent
},
{
    path: '', redirectTo: '/signup', pathMatch: 'full'
},
{
    path: 'air', component: AirComponent, canActivate:[AuthGuard]
},
{
    path:'update', component:UpdateComponent, canActivate:[AuthGuard]
}
];
