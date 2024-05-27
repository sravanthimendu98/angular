// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  // { path: 'app', component: ChildComponent },

  { path: 'templateFormValidation', component: TemplateFormValidationComponent },
  { path: 'reactiveFormValidation', component: ReactiveFormValidationComponent },

  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: '*', redirectTo: '/templateFormValidation' },
  { path: '**', redirectTo: '/templateFormValidation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
