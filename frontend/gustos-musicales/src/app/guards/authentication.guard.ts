import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServicioService } from '../services/usuario_servicio/usuario-servicio.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userService: UsuarioServicioService, private router: Router){}
  canActivate(): boolean {
    if (this.userService.verifyLogin()){
      return true;
    } else{
       this.router.navigate(['/home']);
       return false;
    }
   }
}
