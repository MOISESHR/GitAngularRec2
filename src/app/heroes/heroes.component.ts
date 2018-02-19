import { Component, OnInit } from '@angular/core';

import { HeroeBE } from '../heroe';
import { ListaHeroes } from '../heroe-data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroe : HeroeBE = {
  //   id: 1,
  //   nombre: 'Moises HR'
  // }

  heroes = ListaHeroes;

  seleccionadoHeroe: HeroeBE;

  onSelect(heroe: HeroeBE): void {
    this.seleccionadoHeroe = heroe;
  }

  constructor() { 
    
  }

  ngOnInit() {
    
  }
  
}
