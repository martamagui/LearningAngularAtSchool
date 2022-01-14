import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundos = 0;
  //Input recive, Output recibe informacion del padre
  @Input() inicio: any = 0;
  @Output() multiplo10 = new EventEmitter();
  ngOnInit(): void {
    this.segundos = this.inicio;
    setInterval(() => {
      this.segundos++;
      if (this.segundos % 2 == 0) {
        this.multiplo10.emit(this.segundos);
      }
    },1000);
  }


}
