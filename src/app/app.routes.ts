// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { HomeComponent } from './home/home.component';
import { AddComponentsComponent } from './add-components/add-components.component';

export const routes: Routes = [
  { path: 'templateFormValidation', component: TemplateFormValidationComponent },
  { path: 'reactiveFormValidation', component: ReactiveFormValidationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addComponents', component: AddComponentsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '*', redirectTo: '/templateFormValidation' },
  { path: '**', redirectTo: '/reactiveFormValidation' },
  { path: '**', redirectTo: '/home' },
  { path: '*', redirectTo: '/addComponents'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
