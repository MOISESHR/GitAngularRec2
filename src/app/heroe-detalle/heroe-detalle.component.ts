import { Component, OnInit, Input } from '@angular/core';
import { HeroeBE } from '../heroe'; 

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  @Input() heroe: HeroeBE;

  constructor() { }

  ngOnInit() {
  }

}
