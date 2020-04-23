import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary"  (click)="tamano = tamano + 5">
      <div class="fa fa-plus"></div>
    </button>
    <button class="btn btn-primary"  (click)="tamano = tamano - 5">
      <div class="fa fa-minus"></div>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
