export class Restaurante {

  // name,país,tipo de comida y año de fundación imagen, name, descripción y rating
  id: number;
  name: string;
  opening_year: number;
  country: string;
  cuisine: string;
  rating: number;
  descripcion: string;
  image: string;

  public constructor(
    id: number,
    name: string,
    opening_year: number,
    country: string,
    cuisine: string,
    image: string,
    descripcion: string,
    rating: number
  ) {
    this.id = id;
    this.name = name;
    this.opening_year = opening_year;
    this.country = country;
    this.cuisine = cuisine;
    this.image = image;
    this.descripcion = descripcion;
    this.rating = rating;
  }
}
