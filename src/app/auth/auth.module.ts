import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {SignupPage} from './signup/signup.page';
import {LoginPage} from './login/login.page';
import {ResetPasswordPage} from './reset-password/reset-password.page';


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPage},
    {path: 'signup', component: SignupPage},
    {path: 'reset-password', component: ResetPasswordPage},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SignupPage,
        LoginPage,
        ResetPasswordPage,
    ]
})
export class AuthModule {
}
