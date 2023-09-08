import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string ="";

  constructor(private router:Router) {}

  ngOnInit() {
  }

  menu(){
    var parametro = 123;
    this.router.navigateByUrl(parametro + "/menu");
  }

}
