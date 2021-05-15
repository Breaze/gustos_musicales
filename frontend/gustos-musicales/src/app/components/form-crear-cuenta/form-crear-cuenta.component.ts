import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioServicioService } from 'src/app/services/usuario_servicio/usuario-servicio.service';

@Component({
  selector: 'app-form-crear-cuenta',
  templateUrl: './form-crear-cuenta.component.html',
  styleUrls: ['./form-crear-cuenta.component.css']
})
export class FormCrearCuentaComponent implements OnInit {
  public crear_cuenta: FormGroup;

  constructor(private usuario_servicio: UsuarioServicioService) {
    this.crear_cuenta = new FormGroup({
      nombre: new FormControl(null),
      apellido: new FormControl(null),
      correo: new FormControl(null),
      clave: new FormControl(null)
    });
   }

  ngOnInit(): void {
  }
  public crearCuenta(){
    //this.usuario_servicio.crearUsuario(this.usuario_servicio);
    this.usuario_servicio.crearUsuario(this.crear_cuenta.value.nombre, this.crear_cuenta.value.apellido, this.crear_cuenta.value.correo, this.crear_cuenta.value.clave);
    //console.log(this.login.value);

  }
}
