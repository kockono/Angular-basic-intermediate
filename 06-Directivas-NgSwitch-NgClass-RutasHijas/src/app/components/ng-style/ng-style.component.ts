import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': tamano + 'px', 'color':'red' }">
      Hola mundo.... Esta es una etiqueta
    </p>
    <p [style.fontSize.px]="tamano">
      Hola mundo.... Esta es una etiqueta
    </p>
    <button class="btn btn-primary mr-3" (click)="tamano = tamano + 5"> <i class="fa fa-plus"></i> </button>
    <button class="btn btn-primary"  (click)="tamano = tamano - 5"><i class="fa fa-minus"></i> </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 28;

  constructor() { }

  ngOnInit() {
  }

}
