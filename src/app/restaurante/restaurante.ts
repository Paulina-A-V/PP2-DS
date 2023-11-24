export class Restaurante {

  // name,país,tipo de comida y año de fundación imagen, name, descripción y rating
  id: number;
  name: string;
  opening_year: number;
  country: string;
  cuisine: string;
  rating: number;
  description: string;
  image: string;

  public constructor(
    id: number,
    name: string,
    opening_year: number,
    country: string,
    cuisine: string,
    image: string,
    description: string,
    rating: number
  ) {
    this.id = id;
    this.name = name;
    this.opening_year = opening_year;
    this.country = country;
    this.cuisine = cuisine;
    this.image = image;
    this.description = description;
    this.rating = rating;
  }
}
