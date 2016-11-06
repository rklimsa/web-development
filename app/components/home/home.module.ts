import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent }   from './home.component';
import { HeaderComponent } from './../header/header.component';
import { VideoComponent } from './../video/video.component';
import { routes } from './../../app.routes';

@NgModule({
  imports:      [ 
	BrowserModule,
	RouterModule.forRoot(routes)
  ],
  exports: [
	RouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ HomeComponent, HeaderComponent, VideoComponent],
  bootstrap:    [ HomeComponent ]
})
export class MainModule { }