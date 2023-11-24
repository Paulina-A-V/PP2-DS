import { Restaurante } from './restaurante';

export class RestauranteDetail extends Restaurante{
  
    constructor(id: number,
        name: string,
        opening_year: number,
        country: string,
        cuisine: string,
        rating: string,
        descricpion: string,
        image: number,) {
      super(id, name, opening_year, country, cuisine, rating, descricpion, image);
    
    }
  
  }