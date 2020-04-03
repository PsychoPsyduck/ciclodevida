import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

 
  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email == 'admin@mail.com' && this.usuario.pass == '1234'){
      // Tiene que llevar a bienvenido
      this.route.navigate(['home'])
    } else{
      // Tiene que llevar a error
      this.route.navigate(['error'])
    } 
  }
}
