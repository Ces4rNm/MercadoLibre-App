import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.scss']
})
export class SaleHistoryComponent implements OnInit {

  product: Array<any> = [];

  constructor() {
    const product = localStorage.getItem('product');
    if (product) {
      this.product = JSON.parse(product);
    }
  }

  ngOnInit(): void {
  }

  display_redirect_info: boolean = false;



}
