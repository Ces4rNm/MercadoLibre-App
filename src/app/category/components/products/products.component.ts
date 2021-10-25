import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() categoryId: number;
  windowWidth: number;
  @ViewChild('row_') row_: ElementRef;
  rowWidth: number;
  cardsShow: number = 0;
  cardWidth: number;
  @ViewChild('grids_') carrousel_: ElementRef;

  products: Array<any> = [];

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_649323-MCO32689978461_102019-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_968801-MCO32689978424_102019-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_666858-MCO32689999285_102019-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_888052-MCO32689981622_102019-R.webp"
        ],
        name: "Volkswagen Amarok Trendline T Mt 2000cc 4x4",
        value: 102500000,
        discount: 0,
        sales: 0,
        freeShipping: false,
        categoryId: 1,
        stock: 2,
        detail: {
          features: {
            marca: "Volkswagen",
            modelo: "T Mt 2000cc 4x4",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Jorge Moreno",
          location: "José Joaquín Vargas - Barrios Unidos - Bogotá D.C.",
          sales: 234,
        }
      },
      {
        id: 2,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_683376-MCO47653692437_092021-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_921318-MCO47653617922_092021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_876654-MCO47653674607_092021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_719000-MCO47653618947_092021-R.webp"
        ],
        name: "Bajaj Dominar 250 2022",
        value: 12000000,
        discount: 0,
        sales: 5,
        freeShipping: false,
        categoryId: 1,
        stock: 5,
        detail: {
          features: {
            marca: "Bajaj",
            modelo: "250",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Bajaj",
          location: "San Diego - Medellín - Antioquia",
          sales: 1676,
        }
      },
      {
        id: 3,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_921308-MCO42400818475_062020-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_942686-MCO42400824150_062020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_902105-MCO42400753939_062020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_888033-MCO42400932251_062020-R.webp"
        ],
        name: "Todo En Uno Pc Aio Lenovo Intel Dualcore Disco1tb Ram8gb W10",
        value: 1499000,
        discount: 0,
        sales: 125,
        freeShipping: true,
        categoryId: 2,
        stock: 9,
        detail: {
          features: {
            "Marca": "Lenovo",
            "Modelo": "V130-20IGM",
            "Color": "Negro",
            "Procesador": "Intel Doble Nucleo 2.70 GHz",
            "Memoria RAM": "8 GB",
            "Capacidad del disco rígido": "1000 GB",
            "Resolución de la pantalla": "1366x768",
            "GPU": "Intel UHD"
          },
          description: "- Nota ! El Equipo se envía con todos sus programas básicos para trabajar. - Modelo Exclusivo ! 6 Puertos Usb = 4 En la parte trasera / 2 En la parte de Abajo - Unidad De Dvd Incluida."
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Lenovo",
          location: "Bucaramanga, Santander",
          sales: 654,
        }
      },
      {
        id: 4,
        imgs: [
          "https://http2.mlstatic.com/D_NQ_NP_2X_843331-MCO44751157835_012021-F.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Monitor gamer Samsung LF22T350FH led 22 ' negro 100V/240V",
        value: 649000,
        discount: 50,
        sales: 7149,
        freeShipping: true,
        categoryId: 2,
        stock: 6,
        detail: {
          features: {
            marca: "Tedge",
            modelo: "KB902CM",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Tedge",
          location: "Cali, Valle Del Cauca",
          sales: 7149,
        }
      },
      {
        id: 5,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_701697-MCO47719757865_092021-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_603655-MCO47000479383_082021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_763992-MCO47000229925_082021-R.webp"
        ],
        name: "Conjunto Deportivo Sudadera Spandex Y Camiseta Original",
        value: 74166,
        discount: 6,
        sales: 7149,
        freeShipping: false,
        categoryId: 3,
        stock: 31,
        detail: {
          features: {
            marca: "RIPPLE Original",
            modelo: "2021",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Todo a 5.000",
          location: "Pereira, Risaralda",
          sales: 34223,
        }
      },
      {
        id: 6,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_648705-CBT42394770993_062020-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_733931-CBT42394770992_062020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_724595-CBT42394770991_062020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_939905-CBT42394770996_062020-R.webp"
        ],
        name: "Ielgy Casual Lona Zapatos De Los Hombres De La Moda Coreana",
        value: 131069,
        discount: 5,
        sales: 1,
        freeShipping: true,
        categoryId: 3,
        stock: 21997,
        detail: {
          features: {
            marca: "Tedge",
            modelo: "KB902CM",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Tedge",
          location: "Guangdong",
          sales: 2332467,
        }
      },
      {
        id: 7,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_600975-MCO47969703356_102021-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_807108-MCO47969601895_102021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_785633-MCO47246793268_082021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_936137-MCO47246793266_082021-R.webp"
        ],
        name: "Combo Cama Closet Y Mesas De Noche Maderkit 01163-prm",
        value: 1329900,
        discount: 29,
        sales: 184,
        freeShipping: false,
        categoryId: 4,
        stock: 28,
        detail: {
          features: {
            marca: "Maderkit",
            modelo: "1163-CD-W-R",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Maderkit",
          location: "Tienda oficial de Mercado Libre",
          sales: 2001,
        }
      },
      {
        id: 8,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_748940-MCO44514879009_012021-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_745526-MCO44514863841_012021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_771941-MCO44514878145_012021-R.webp"
        ],
        name: "Closet Tera Wengue",
        value: 300900,
        discount: 51,
        sales: 284,
        freeShipping: false,
        categoryId: 4,
        stock: 23,
        detail: {
          features: {
            marca: "RTA DESING",
            modelo: "CLW 2208",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "RTA Muebles",
          location: "Tienda oficial de Mercado Libre",
          sales: 2001,
        }
      },
      {
        id: 9,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_990246-MLA46153276373_052021-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_620519-MLA46153369011_052021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_981213-MLA46153369013_052021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_629642-MLA46153276379_052021-R.webp"
        ],
        name: "Apple iPhone 11 (128 GB) - Negro",
        value: 2932706,
        discount: 6,
        sales: 843,
        freeShipping: false,
        categoryId: 8,
        stock: 3953,
        detail: {
          features: {
            marca: "Tedge",
            modelo: "KB902CM",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Apple",
          location: "Santa Fe, Bogotá D.C.",
          sales: 7149,
        }
      },
      {
        id: 10,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_977563-MLA44226116000_122020-AD.webp",
          "https://http2.mlstatic.com/D_Q_NP_855601-MLA44226370323_122020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_754340-MLA44226370324_122020-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_888007-MLA44226460001_122020-R.webp"
        ],
        name: "Samsung Galaxy S20 FE 256 GB cloud navy 8 GB RAM",
        value: 2699900,
        discount: 0,
        sales: 13,
        freeShipping: true,
        categoryId: 8,
        stock: 2,
        detail: {
          features: {
            marca: "Tedge",
            modelo: "KB902CM",
          },
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga iure quia tempora, ratione voluptate! Ab cumque eaque natus quis magnam laudantium eius nesciunt praesentium, sequi provident maxime deleniti iure?"
        },
        shop: {
          img: "https://http2.mlstatic.com/storage/official-stores-images/tedge/small_logo20201509222754.jpg",
          name: "Tedge",
          location: "Bosa, Bogotá D.C.",
          sales: 199,
        }
      },
    ];
    this.products = this.products.filter(item => item.categoryId == this.categoryId);
    setTimeout(() => {
      this.onCarouselResize();
    }, 10);
  }

  open(product) {
    this.appService.record = this.appService.record.filter(item => item.id != product.id);
    this.appService.record.unshift(product);
    this.appService.product = product;
    window.scroll(0, 0);
    this.router.navigate(['/product', product.id]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onCarouselResize();
  }

  onCarouselResize() {
    this.windowWidth = window.innerWidth;
    this.rowWidth = Number(this.row_.nativeElement.offsetWidth);
    if (this.windowWidth <= 580) {
      this.cardsShow = 1;
      this.cardWidth = this.rowWidth;
    } else if (this.windowWidth <= 832) {
      this.cardsShow = 3;
      this.cardWidth = this.rowWidth / this.cardsShow;
    } else if (this.windowWidth <= 1024) {
      this.cardsShow = 4;
      this.cardWidth = this.rowWidth / this.cardsShow;
    } else {
      this.cardsShow = 5;
      this.cardWidth = this.rowWidth / this.cardsShow;
    }
  }
}
