import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {

  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
