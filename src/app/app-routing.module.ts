import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CashlessComponent } from './cashless/cashless.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { UpdateComponent } from './update/update.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'register-component',component:RegisterComponent},
  {path:'cashless-component' , component:CashlessComponent},
  {path:'newregister-component' , component:NewregisterComponent},
  {path:'update-component',component:UpdateComponent},
  {path:'reimbursement-component',component:ReimbursementComponent},
  {path:'app-component',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
