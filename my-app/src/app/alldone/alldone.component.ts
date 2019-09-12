import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";

@Component({
  selector: 'app-alldone',
  templateUrl: './alldone.component.html',
  styleUrls: ['./alldone.component.scss']
})
export class AlldoneComponent implements OnInit {
  response: any;
  id: any;
  content: any;
  constructor(public router: Router) {
    this.response = this.router.getCurrentNavigation().extras.state.response;
    this.id = this.response.confirmationId;
    this.content = this.response.content;
   }

  ngOnInit() {
  }

}
