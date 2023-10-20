import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

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

    this.paisService.buscarCapital(this.termino)
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

    this.paisService.buscarCapital(termino)
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5), 
        (err) => this.paisesSugeridos = []
      );

  }

}
