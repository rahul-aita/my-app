import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { FormsComponent } from './forms/forms.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'forms',component:FormsComponent},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component},
  {path:'form4',component:Form4Component},
  {path:'sign-up',component:SignUpComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
