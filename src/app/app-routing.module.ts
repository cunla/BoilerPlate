import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'about', loadChildren: './about/about.module#AboutPageModule'},
    {path: 'login', loadChildren: './auth/login/login.module#LoginPageModule'},
    {path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
