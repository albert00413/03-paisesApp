import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  
  pais!: Pais[];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    ) {}
  
  ngOnInit(): void {
    console.log(this.pais);
    
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)), tap(console.log)
        )
      .subscribe( pais => this.pais = pais);

  }

}
