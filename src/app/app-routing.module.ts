import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: UserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
