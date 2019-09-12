import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular 6 - Kumaravel';

  constructor(private router: Router){}

  goToLogin(){
    this.router.navigate(['login']);
  }
}
