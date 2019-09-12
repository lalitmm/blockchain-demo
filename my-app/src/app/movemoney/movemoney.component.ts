import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MoveMoneyActions, MoveMoneyRequest } from './move-money-action.model';

@Component({
  selector: 'app-movemoney',
  templateUrl: './movemoney.component.html',
  styleUrls: ['./movemoney.component.scss']
})
export class MovemoneyComponent implements OnInit {

  moveMoneyRequest: MoveMoneyRequest = {
    fromAccount: null,
    fromAmount: null,
    country:null,
    transferamount:null,
    toAccount:null,
    location:null,
    name:null
  }
  moveMoneyActions: MoveMoneyActions ={
    isFromAccountSubmitted:false,
    isAmountDetailsSubmitted:false,
    isBeneficiarySubmitted:false
  };

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
}
