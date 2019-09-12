import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MoveMoneyActions, MoveMoneyRequest } from '../movemoney/move-money-action.model';

@Component({
  selector: 'app-amount-details',
  templateUrl: './amount-details.component.html',
  styleUrls: ['./amount-details.component.scss']
})
export class AmountDetailsComponent implements OnInit {

  @Input() moveMoneyActions: MoveMoneyActions;
  @Input() moveMoneyRequest: MoveMoneyRequest;
  amountDetailsForm: FormGroup;
  submitted: boolean = false;
  invalidamountDetailsForm: boolean = false;
  descr: string; 
  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.amountDetailsForm = this.formBuilder.group({
      fromAmount: ['', Validators.required],
      country: ['', Validators.required],
      transferamount: ['', Validators.required]
    }); 
  }
  calculate(){
    var control = this.amountDetailsForm.controls;
    if(control && control.country.value){
      if(control.country.value === "MXN"){
        control.transferamount.setValue(control.fromAmount.value * 14.83);
      } else if(control.country.value === "USD") {
        control.transferamount.setValue(control.fromAmount.value * 0.76);
      } else if (control.country.value === 'AUD') {
        control.transferamount.setValue(control.fromAmount.value * 1.10);
      } else if (control.country.value === "EUR") {
        control.transferamount.setValue(control.fromAmount.value * 0.68);
      }
      this.descr = this.amountDetailsForm.controls.fromAmount.value + " CAD = " + this.amountDetailsForm.controls.transferamount.value + " " + this.amountDetailsForm.controls.country.value;
    }
  }

  cancel(){
    var control = this.amountDetailsForm.controls;
    control.fromAmount.setValue("");
    control.country.setValue("");
    control.transferamount.setValue("");
    //this.router.navigate(['fromaccount']);
  }

  onNext() {
    this.submitted = true;
    if (this.amountDetailsForm.invalid) {
      return;
    }
    if(this.amountDetailsForm.controls.fromAmount.value !== '' && this.amountDetailsForm.controls.transferamount.value !== '') {
      this.moveMoneyRequest.fromAmount = this.amountDetailsForm.controls.fromAmount.value;
      this.moveMoneyRequest.transferamount = this.amountDetailsForm.controls.transferamount.value;
      this.moveMoneyRequest.country = this.amountDetailsForm.controls.country.value;
      this.moveMoneyActions.isAmountDetailsSubmitted = true;
      this.amountDetailsForm.disable();
      //this.router.navigate(['beneficiary']);
    }else {
      this.invalidamountDetailsForm = true;
    }
  }
}
