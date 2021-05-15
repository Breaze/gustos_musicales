import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  constructor(private http: HttpClient, private router: Router, private toastrService: ToastrService) { }

  public iniciarSesion(correo: string, clave: string){    
    return this.http.post(`http://localhost:3800/api/usuario/login`, {correo, clave}).subscribe(     
      (succes: any) => {
       if(succes === false){
        alert("Datos Incorrectos");
         return;
       }
      //  console.log("Exito");
      //  this.toastrService.success('Bienvenido');
      console.log(succes[0]);
      localStorage.setItem("id", succes[0]["id"]);
      localStorage.setItem("nombre", succes[0]["nombre"]);
      localStorage.setItem("apellido",succes[0]["apellido"]);
      localStorage.setItem("correo", succes[0]["correo"]);
      this.router.navigate(['/start']);
       
      },
      err => {
        //this.toastrService.error('Intentelo nuevamente', 'Datos incorrectos');
        console.log("Error");
      }
    )
   }
   public verifyLogin():boolean{
    return !!localStorage.getItem("id");
  }
  public crearUsuario(nombre: string, apellido: string, correo: string, clave: string){    
    return this.http.post(`http://localhost:3800/api/usuario`, {nombre, apellido, correo, clave}).subscribe(     
      (succes: any) => {
       if(succes === false){
        alert("El correo ya está registrado");
         return;
       }
      //  console.log("Exito");
      //  this.toastrService.success('Bienvenido');
      console.log(succes[0]);
      
       alert("El usuario se creo exitosamente");
       
      },
      err => {
        //this.toastrService.error('Intentelo nuevamente', 'Datos incorrectos');
        console.log("Error");
      }
    )
   }
   
}
