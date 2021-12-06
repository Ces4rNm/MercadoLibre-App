import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private router_url: ActivatedRoute,) { }

  condition: string = 'login';

  data_user: any = {
    name: '',
    email: '',
    password: ''
  }

  add() {
    let get_user = JSON.parse(localStorage.getItem("user")) || [];

    get_user.push(this.data_user)
    localStorage.setItem("user", JSON.stringify(get_user));
    this.router.navigate(['/user/login']);
  }

  ngOnInit(): void {

  }

}


