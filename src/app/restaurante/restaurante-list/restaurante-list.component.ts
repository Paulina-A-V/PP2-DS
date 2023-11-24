import { RestauranteService } from '../restaurante.service';
import { Component, OnInit } from '@angular/core';
import { RestauranteDetail } from '../restaurante-detail';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css'],
})
export class RestauranteListComponent implements OnInit {
  constructor(private restauranteService: RestauranteService) {}
  
  public restaurantes: Array<RestauranteDetail> = [];
  selected: Boolean = false;
  selectedRestaurante!: RestauranteDetail;
  p: number = 1;
  searchedCategoria: any;
  public max: string = '';

  getRestaurantes() {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
      this.getAvg();
    });
  }

  onSelected(restaurante: RestauranteDetail): void {
    this.selected = true;
    this.selectedRestaurante = restaurante;
  }

  getAvg() {
    let mayor: number = 0;
    let res: string= "";
    for (let i of this.restaurantes) {
      if (i.rating > mayor) {
        mayor = i.rating;
        res= i.name;
      }
    }

    this.max = res
  }

  ngOnInit() {
    this.getRestaurantes();
    //this.getAvg();
  }
}
