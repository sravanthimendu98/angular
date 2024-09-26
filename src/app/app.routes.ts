import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { AddComponentsComponent } from './add-components/add-components.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ReactiveFormDataComponent } from './reactive-form-data/reactive-form-data.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'templateForm',
    loadComponent: () =>
      import(
        './components/template-form-validation/template-form-validation.component'
      ).then((m) => m.TemplateFormValidationComponent),
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'components',
    component: AddComponentsComponent,
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
  },
  { path: 'components/departments/:id', component: DepartmentDetailsComponent },
  {
    path: 'reactiveForm',
    component: ReactiveFormValidationComponent,
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
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
