import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../api.service";
import { MoveMoneyActions, MoveMoneyRequest } from '../movemoney/move-money-action.model';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit {
  @Input() moveMoneyActions: MoveMoneyActions;
  @Input() moveMoneyRequest: MoveMoneyRequest;
  
  beneficiaryForm: FormGroup;
  submitted: boolean = false;
  invalidbeneficiaryForm: boolean = false;
  response:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.beneficiaryForm = this.formBuilder.group({
      toAccount: ['', Validators.required],
      name: [''],
      location: [''],
    });
  }


  cancel(){
    var control = this.beneficiaryForm.controls;
    control.toAccount.setValue("");
    this.router.navigate(['amountdetails']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.beneficiaryForm.invalid) {
      return;
    }
    if(this.beneficiaryForm.controls.toAccount.value !== '') {
      this.moveMoneyRequest.toAccount = this.beneficiaryForm.controls.toAccount.value;
      this.moveMoneyRequest.location = this.beneficiaryForm.controls.location.value;
      this.moveMoneyRequest.name = this.beneficiaryForm.controls.name.value;

      this.apiService.transferMoney(this.moveMoneyRequest).subscribe ((data) => { 
      this.router.navigate(['alldone'], { state: { response: data}});
    });
    }else {
      this.invalidbeneficiaryForm = true;
    }
  }
}
