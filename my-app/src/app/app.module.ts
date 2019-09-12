import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovemoneyComponent } from './movemoney/movemoney.component';
import { AlldoneComponent } from './alldone/alldone.component';
import { FromAccountComponent } from './from-account/from-account.component';
import { AmountDetailsComponent } from './amount-details/amount-details.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovemoneyComponent,
    AlldoneComponent,
    FromAccountComponent,
    AmountDetailsComponent,
    BeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
