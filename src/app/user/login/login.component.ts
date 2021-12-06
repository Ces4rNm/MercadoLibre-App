import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  condition: string = 'login';

  data_user: any = {
    name: '',
    email: '',
    password: ''
  }

  login() {
    let get_user = JSON.parse(localStorage.getItem("user"));
    if (get_user) {
      for (let index = 0; index < get_user.length; index++) {

        if (this.data_user.email == get_user[index].email && this.data_user.password == get_user[index].password) {
          localStorage.setItem("user_login", JSON.stringify(get_user[index]));
          this.appService.userData = get_user[index];
          this.router.navigate(['']);
        }
      }
    }
  }

  ngOnInit(): void {
    // inicio del usuario
    let user = [
      {
        name: 'prueba',
        email: 'prueba@gmail.com',
        password: 'prueba123',
      }
    ]

    let get_user = localStorage.getItem("user");
    if (!get_user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

}


