import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { CommonService } from './common.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AppInterceptor } from '../services/interceptors.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    DatePipe,
  ],
  providers: [CommonService, AppInterceptor],
  bootstrap: [],
})
export class AppModule {}
