import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CashlessComponent } from './cashless/cashless.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { UpdateComponent } from './update/update.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CashlessComponent,
    NewregisterComponent,
    UpdateComponent,
    ReimbursementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
