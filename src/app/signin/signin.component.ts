import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private location: Location, private router: Router, private router_url: ActivatedRoute,) { }

  condition: string = 'login';

  data_user: any = {
    name: '',
    email: '',
    password: ''
  }

  option_login_create: any = {
    login: () => {
      let get_user = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem("user"))));
      if (get_user) {
        for (let index = 0; index < get_user.length; index++) {

          if (this.data_user.email == get_user[index].email && this.data_user.password == get_user[index].password) {
            sessionStorage.setItem("user_login", JSON.stringify(get_user[index]));
            this.router.navigate(['']);
          }
        }
      }
    },
    add: () => {
      if(this.condition !== 'add'){
        this.condition = 'add'
      }else{
        let get_user = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem("user")))) || [];

        get_user.push(this.data_user)
        sessionStorage.setItem("user",JSON.stringify(get_user));
        this.condition = 'login';
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

    let get_user = JSON.parse(JSON.stringify(sessionStorage.getItem("user")));
    if (!get_user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    // validacion de la condicion para ingresar o crear usuario
    let url = this.location.path();

    if (url.includes("login")) {
      this.condition = "login";
    } else if (url.includes("add")) {
      this.condition = "add";
    }
  }

}


