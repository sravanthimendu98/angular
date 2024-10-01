import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ReactiveFormDataComponent } from './reactive-form-data/reactive-form-data.component';
import { ActivateGuardService } from '../services/activateGuard.service';
import { LoginComponent } from './login/login.component';
import { TemplateFormValidationComponent } from './form/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './form/reactive-form-validation/reactive-form-validation.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {
    path: 'forms',
    component: FormComponent,
    canActivateChild: [ActivateGuardService],
    canMatch: [ActivateGuardService],
    children: [
      {
        path: 'templateForm',
        component: TemplateFormValidationComponent,
      },
      {
        path: 'reactiveForm',
        component: ReactiveFormValidationComponent,
        canDeactivate: [ActivateGuardService],
      },
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ActivateGuardService],
    canMatch: [ActivateGuardService],
  },
  {
    path: 'userInfoDetails',
    component: DepartmentDetailsComponent,
    canActivate: [ActivateGuardService],
    resolve: { userData: ActivateGuardService },
    canMatch: [ActivateGuardService],
  },
  {
    path: 'getFormData',
    component: ReactiveFormDataComponent,
    canActivate: [ActivateGuardService],
    canMatch: [ActivateGuardService],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
