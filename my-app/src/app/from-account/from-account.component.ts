import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MoveMoneyActions, MoveMoneyRequest } from '../movemoney/move-money-action.model';

@Component({
  selector: 'app-from-account',
  templateUrl: './from-account.component.html',
  styleUrls: ['./from-account.component.scss']
})
export class FromAccountComponent implements OnInit {

  @Input() moveMoneyActions: MoveMoneyActions;
  @Input() moveMoneyRequest: MoveMoneyRequest;
  fromAccountForm: FormGroup;
  isNextClicked: boolean = false;
  invalidfromAccountForm: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.fromAccountForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
    });
  }
  onNext() {
    this.isNextClicked = true;
    if (this.fromAccountForm.invalid) {
      return;
    }
    if(this.fromAccountForm.controls.fromAccount.value !== '') {
      this.moveMoneyRequest.fromAccount = this.fromAccountForm.controls.fromAccount.value;
      this.moveMoneyActions.isFromAccountSubmitted = true;
      this.fromAccountForm.disable();
      //this.router.navigate(['amountdetails']);
    }else {
      this.invalidfromAccountForm = true;
    }
  }
}
