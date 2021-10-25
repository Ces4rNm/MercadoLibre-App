import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category = {
    id: null,
    name: '',
    img: '',
  };

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private appService: AppService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    // ----------Default
    this.category.id = this.route.snapshot.params.categoryId;
    this.setCategory();
    // ----------Params
    this.route.params.subscribe(
      (params: Params) => {
        if (params['categoryId']) {
          this.category.id = Number(params['categoryId']);
          this.setCategory();
        }
      }
    );
  }

  setCategory(): void {
    this.titleService.setTitle('Mercado Libre Colombia');
    if (this.appService.categories.length > 0) {
      let i = this.appService.categories.findIndex(elemt => elemt.id == this.category.id);
      if (i != -1) {
        let categoryGet = this.appService.categories;
        this.category.name = categoryGet[i].name;
        this.category.img = categoryGet[i].img;
        this.titleService.setTitle(this.category.name);
      } else {
        // this.getCategoryInfo();
      }
    } else {
      // this.getCategoryInfo();
    }
  }

}
