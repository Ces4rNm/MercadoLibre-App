import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public appService: AppService) { }

  exit() {
    localStorage.removeItem('user_login');
    this.router.navigate(['/user/login']);
  }

  ngOnInit(): void {

  }

}
