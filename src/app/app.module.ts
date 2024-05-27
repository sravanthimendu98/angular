// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
