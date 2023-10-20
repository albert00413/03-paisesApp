import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
   ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];
  mostrarSugerencias: boolean = false;
  

  constructor (private paisService: PaisService){}

  buscar( termino: string ) {
    this.hayError= false;
    this.termino = termino;

    if(termino.trim()==="") return;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
    },
    (err) => {
      this.hayError = true;
      this.paises = [];
    });
    
  }

  paisesSugeridos: Pais[] = [];
  sugerencias( termino: string ){
    this.hayError= false;
    this.termino = termino;    
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5), 
        (err) => this.paisesSugeridos = []
      );

  }

}
