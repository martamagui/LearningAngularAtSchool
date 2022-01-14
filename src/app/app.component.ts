import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo';
  nombre = 'MartaMagui';
  edad = 23;
  email = "mi.email@email.com";
  sueldos = [1500, 1700, 2100];
  activo = true;
  esActivo() {
    if (this.activo) {
      return 'Trabajador activo';
    } else {
      return 'Trabajador inactivo';
    }
  }
  sumaSueldos() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; ++i) {
      suma += this.sueldos[i];
    }
    return suma;
  }
  // Contador
  contador = 1;
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  // Dado
  valor1: any;
  valor2: any;
  valor3: any;
  resultado: any = '';
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }
  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor2 == this.valor3) {
      this.resultado = 'Ganaste';
    } else {
      this.resultado = 'Perdiste';
    }
  }

  //Cronómetro
  mensaje = '';
  actualizar(t: any) {
    this.mensaje = "Han pasado 10 segundos: " + t;
  }
}


