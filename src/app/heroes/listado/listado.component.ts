import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes:any [] = ['Spiderman', 'Venom', 'Carnage'];
  heroeBorrado: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOninit');
  }

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';


  }

}
