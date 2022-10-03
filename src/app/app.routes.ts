import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';

import { SignupComponent } from './signup/signup.component';


const ROUTES: Routes = [

  { path: 'signup', component: SignupComponent },

  { path: 'user', component: UserComponent },


];


export { ROUTES };