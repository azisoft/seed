import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './www/about/about.module';
import { NewModule } from './www/new/new.module';
import { HomeModule } from './www/home/home.module';
import { SharedModule } from './www/shared/shared.module';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, NewModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
