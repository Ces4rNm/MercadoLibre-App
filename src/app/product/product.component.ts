import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  category = {
    id: null,
    name: '',
    img: '',
  };
  productId: number = null;
  viewImg: string = "";
  isAddedShoppingCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public appService: AppService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    // ----------Default
    this.productId = this.route.snapshot.params.productId;
    this.getProduct();
    // ----------Params
    this.route.params.subscribe(
      (params: Params) => {
        if (params['productId']) {
          this.productId = Number(params['productId']);
          this.getProduct();
        }
      }
    );
  }

  setCategory(): void {
    if (this.appService.categories.length > 0) {
      let i = this.appService.categories.findIndex(elemt => elemt.id == this.category.id);
      if (i != -1) {
        let categoryGet = this.appService.categories;
        this.category.name = categoryGet[i].name;
        this.category.img = categoryGet[i].img;
      } else {
        // this.getCategoryInfo();
      }
    } else {
      // this.getCategoryInfo();
    }
  }

  getProduct(): void {
    if (Object.keys(this.appService.product).length > 0) {
      if (this.appService.product.id == this.productId) {
        let productGet = this.appService.product;
        let i = this.appService.shoppingCart.findIndex(elemt => elemt.id == productGet.id);
        if (i != -1) {
          this.isAddedShoppingCart = true;
        } else {
          this.isAddedShoppingCart = false;
        }
        this.category.id = productGet.categoryId;
        this.viewImg = productGet.imgs[0];
        this.setCategory();
        this.titleService.setTitle(productGet.name);
      } else {
        // this.getProductInfo();
      }
    } else {
      // this.getProductInfo();
    }
  }

  addShoppingCart(product) {
    let i = this.appService.shoppingCart.findIndex(elemt => elemt.id == product.id);
    if (i != -1) {
      this.appService.shoppingCart.splice(i, 1);
      this.isAddedShoppingCart = false;
    } else {
      this.appService.shoppingCart.push(product);
      this.isAddedShoppingCart = true;
    }
    console.log(this.appService.shoppingCart);
  }

}
