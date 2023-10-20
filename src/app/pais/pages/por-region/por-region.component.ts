import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-bottom: 2px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];

  constructor (private paisService: PaisService){}

  
  activarRegion( region: string) {
    this.regionActiva = region;


    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises) => {
      this.paises = paises;
    });
    
  }

}
