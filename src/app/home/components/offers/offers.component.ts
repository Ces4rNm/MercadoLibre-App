import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  windowWidth: number;
  @ViewChild('row_') row_: ElementRef;
  rowWidth: number;
  cardsShow: number = 0;
  cardWidth: number;
  translate: number = 0;
  translateAbs: number = 0;
  @ViewChild('carrousel_') carrousel_: ElementRef;
  @ViewChild('leftArrow_') leftArrow_: ElementRef;
  @ViewChild('rigthArrow_') rigthArrow_: ElementRef;

  offers: Array<any> = [];

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.offers = [
      {
        id: 1,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_808319-MCO45323518779_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge 1",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: true,
        categoryId: 1,
        stock: 1013,
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
        id: 2,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_953860-MCO45098719962_032021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 37900,
        discount: 24,
        sales: 7149,
        freeShipping: false,
        categoryId: 2,
        stock: 1013,
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
        id: 3,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_942365-MCO41598911946_042020-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 66,
        sales: 7149,
        freeShipping: true,
        categoryId: 3,
        stock: 1013,
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
        id: 4,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_669746-MCO47493116092_092021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 4,
        stock: 1013,
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
          "https://http2.mlstatic.com/D_Q_NP_903007-CBT47679778758_092021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 5,
        stock: 1013,
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
        id: 6,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_832519-MCO47473699511_092021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: true,
        categoryId: 1,
        stock: 1013,
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
        id: 7,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_966056-MCO45728003473_042021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 2,
        stock: 1013,
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
        id: 8,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_601858-MCO47473292138_092021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 3,
        stock: 1013,
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
        id: 9,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_926200-MCO45128466917_032021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 4,
        stock: 1013,
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
        id: 10,
        imgs: [
          "https://http2.mlstatic.com/D_Q_NP_724908-MLA45668561651_042021-AB.webp",
          "https://http2.mlstatic.com/D_Q_NP_753762-MCO45728140471_042021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_794513-MCO45323535259_032021-R.webp",
          "https://http2.mlstatic.com/D_Q_NP_606327-MCO45728066883_042021-R.webp"
        ],
        name: "Combo Teclado, Mouse, Pad Y Audífonos Gamer Tedge",
        value: 44900,
        discount: 50,
        sales: 7149,
        freeShipping: false,
        categoryId: 5,
        stock: 1013,
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
    ];
    setTimeout(() => {
      this.onCarouselResize(false);
    }, 10);
  }

  open(product) {
    this.appService.record = this.appService.record.filter(item => item.id != product.id);
    this.appService.record.unshift(product);
    this.appService.product = product;
    this.router.navigate(['/product', product.id]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onCarouselResize(true);
  }

  onCarouselResize(init: boolean) {
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
    // Default translate
    this.translate = 0;
    this.row_.nativeElement.children[0].style.transform = "translate(" + this.translate + "px, 0px)";
    this.translateAbs = Math.abs(this.translate);
  }

  desplaceCards(type: any) {
    this.rowWidth = Number(this.row_.nativeElement.offsetWidth);
    if (typeof (type) != "boolean") {
      type++;
      if (type <= this.cardsShow) {
        this.translate = 0;
      } else {
        this.translate = 0
      }
    } else {
      this.translate = (type) ? this.translate - this.rowWidth : this.translate + this.rowWidth;
    }
    this.row_.nativeElement.children[0].style.transform = "translate(" + this.translate + "px, 0px)";
    this.translateAbs = Math.abs(this.translate);
  }

}
