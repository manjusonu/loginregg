import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { OpenComponent } from './open/open.component';

import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '', component: OpenComponent
  },

  {
    path: 'register', component: RegisterComponent
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
