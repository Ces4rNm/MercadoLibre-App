import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shoppings.component.html',
  styleUrls: ['./my-shoppings.component.scss']
})
export class MyShoppingsComponent implements OnInit {

  constructor(
    public router: Router,
    public appService: AppService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
  }

}
