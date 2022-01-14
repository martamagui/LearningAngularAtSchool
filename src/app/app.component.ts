import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo';
  nombre = "MartaMagui";
  edad = 23;
  email = "mi.email@email.com";
  sueldos = [1500,1700, 2100];
  activo = true;
  esActivo(){
    if(this.activo){
      return 'Trabajador activo';
    }else{
      return 'Trabajador inactivo';
    }
  }
  sumaSueldos(){
    let suma = 0 ; 
    for(let i = 0 ; i<this.sueldos.length;++i){
      suma+= this.sueldos[i];
    }
    return suma;
  }
  // Contador
  contador=1;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
