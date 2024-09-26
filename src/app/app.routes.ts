import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ReactiveFormDataComponent } from './reactive-form-data/reactive-form-data.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from '../services/canDeactivateGuard.service';

export const routes: Routes = [
  {
    path: 'templateForm',
    loadComponent: () =>
      import(
        './components/template-form-validation/template-form-validation.component'
      ).then((m) => m.TemplateFormValidationComponent),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'userInfo', component: DepartmentDetailsComponent },
  {
    path: 'reactiveForm',
    component: ReactiveFormValidationComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'getFormData', component: ReactiveFormDataComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
