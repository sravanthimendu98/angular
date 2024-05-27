// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';

export const routes: Routes = [
  { path: 'templateFormValidation', component: TemplateFormValidationComponent },
  { path: 'reactiveFormValidation', component: ReactiveFormValidationComponent },
  { path: '', redirectTo: '/templateFormValidation', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/templateFormValidation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
