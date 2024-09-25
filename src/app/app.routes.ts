// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { HomeComponent } from './home/home.component';
import { AddComponentsComponent } from './add-components/add-components.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ReactiveFormDataComponent } from './reactive-form-data/reactive-form-data.component';
import { AuthGuardService } from './auth-guard.service';

// app-routing.module.ts
import { CanDeactivateGuard } from './can-deactivate.guard';

export const routes: Routes = [
  {
    path: 'templateForm',
    loadComponent: () =>
      import(
        './components/template-form-validation/template-form-validation.component'
      ).then((m) => m.TemplateFormValidationComponent),
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'components',
    component: AddComponentsComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'components/departments/:id', component: DepartmentDetailsComponent },
  {
    path: '',
    component: ReactiveFormValidationComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'getFormData', component: ReactiveFormDataComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
