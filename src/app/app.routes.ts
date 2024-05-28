// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { ChildComponent } from './components/child/child.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // { path: 'app', component: ChildComponent },

  { path: 'templateFormValidation', component: TemplateFormValidationComponent },
  { path: 'reactiveFormValidation', component: ReactiveFormValidationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '*', redirectTo: '/templateFormValidation' },
  { path: '**', redirectTo: '/templateFormValidation' },
  { path: '**', redirectTo: '/home' },
  // { path: 'toDoApp', component: ToDoAppComponent },
  // { path: 'toDoList', component: ToDoListComponent },
  // { path: '*', redirectTo: '/toDoApp' },
  // { path: '**', redirectTo: '/toDoList' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
