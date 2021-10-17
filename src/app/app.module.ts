import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BlogModule } from './modules/blog/blog.module';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getPaginatorInitial } from '../app/modules/services/init-paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpUrlInterceptor } from './interceptors/http-url.interceptor';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    NgProgressModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      enableHtml: true
    })
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorInitial() },
    { provide: HTTP_INTERCEPTORS, useClass: HttpUrlInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
