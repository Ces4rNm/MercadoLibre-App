import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

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

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    if (this.appService.record.length > 0) {
      setTimeout(() => {
        this.onCarouselResize(false);
      }, 10);
    }
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
