import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioServicioService } from 'src/app/services/usuario_servicio/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public login: FormGroup;

  constructor(private usuario_servicio: UsuarioServicioService) { 
    this.login = new FormGroup({
      correo: new FormControl(null),
      clave: new FormControl(null)
    });
  }



  ngOnInit(): void {
  }
  public inicarSesion(){
    //this.usuario_servicio.crearUsuario(this.usuario_servicio);
    this.usuario_servicio.iniciarSesion(this.login.value.correo, this.login.value.clave);
    //console.log(this.login.value);

  }

}
