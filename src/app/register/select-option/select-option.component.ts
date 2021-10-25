import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  constructor(private router: Router, private router_url: ActivatedRoute,) { }

  number_stage:number = 1;

  data_product: any = {
    name: "",
    description:"",
    image_url:"",
    amount_product:"",
  }

  list_category: Array<any> = [
    {order:0, name:"Seleccione una categoria", id:0 },
    {order:1, name:"Tecnología", id:1 },
    {order:2, name:"Electrodomésticos", id:2 },
    {order:3, name:"Hogar y Muebles", id:3 },
    {order:4, name:"Deportes y Fitness", id:4 },
    {order:5, name:"Herramientas", id:5 },
  ]

  add_category:Array<any> =[];

  select_category:any;

  ngOnInit(): void {
  }

  select_option(e:string){
      for (let index = 0; index < this.list_category.length; index++) {
        if (this.list_category[index].name === e){
          this.select_category = this.list_category[index];
        }
      }
  }

  create_product(){
    let product:any = {
      data_product: this.data_product,
      category: this.add_category
    }

    let data_session = sessionStorage.getItem("product");
    let get_list_product:Array<any> = [] 
   
    if(data_session){
      get_list_product.push(JSON.parse(JSON.stringify(data_session)));  
      get_list_product.push(product)
      sessionStorage.setItem("product",JSON.stringify(get_list_product));
    }else{
      sessionStorage.setItem("product",JSON.stringify(product));
    }
    
    this.router.navigate(['']);
  }
}
