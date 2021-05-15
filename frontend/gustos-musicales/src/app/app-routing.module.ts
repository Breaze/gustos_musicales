import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'start', component: StartComponent, canActivate:[AuthenticationGuard]},
  {path: 'crear_cuenta', component: CrearCuentaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
