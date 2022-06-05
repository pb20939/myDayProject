import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./MyComponents/home/home.component";
import {LoginComponent} from "./MyComponents/login/login.component";
import {MainComponent} from "./MyComponents/main/main.component";

const routes: Routes = [
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'', component:MainComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
