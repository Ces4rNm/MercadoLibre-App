import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showNavBar: boolean = true;
  showFooter: boolean = true;

  record: Array<any> = [];
  categories: Array<any> = [];
  product: any = {};
  shoppingCart: Array<any> = [];
  myShopping: Array<any> = [];

  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Carros, Motos y Otros",
        img: "assets/img/categories/1.png"
      },
      {
        id: 2,
        name: "Computación",
        img: "assets/img/categories/2.png"
      },
      {
        id: 3,
        name: "Ropa y Accesorios",
        img: "assets/img/categories/3.png"
      },
      {
        id: 4,
        name: "Hogar y Muebles",
        img: "assets/img/categories/4.png"
      },
      {
        id: 5,
        name: "Accesorios para Vehículos",
        img: "assets/img/categories/5.png"
      },
      {
        id: 6,
        name: "Electrodomésticos",
        img: "assets/img/categories/6.png"
      },
      {
        id: 7,
        name: "Cámaras y Accesorio",
        img: "assets/img/categories/7.png"
      },
      {
        id: 8,
        name: "Celulares y Teléfonos",
        img: "assets/img/categories/8.png"
      },
      {
        id: 9,
        name: "Belleza y Cuidado Personal",
        img: "assets/img/categories/9.png"
      },
      {
        id: 10,
        name: "Deportes y Fitness",
        img: "assets/img/categories/10.png"
      },
      {
        id: 11,
        name: "Electrónica, Audio y Video",
        img: "assets/img/categories/11.png"
      },
      {
        id: 12,
        name: "Consolas y Videojuegos",
        img: "assets/img/categories/12.png"
      },
      {
        id: 13,
        name: "Juegos y Juguetes",
        img: "assets/img/categories/13.png"
      },
      {
        id: 14,
        name: "Herramientas",
        img: "assets/img/categories/14.png"
      },
    ];
  }
}
