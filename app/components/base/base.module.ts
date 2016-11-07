import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { BaseComponent } from './base.component';
import { HomeComponent } from './../home/home.component';
import { HeaderComponent } from './../header/header.component';
import { VideoComponent } from './../video/video.component';
import { PictureComponent } from './../picture/picture.component';
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
  declarations: [ BaseComponent, HomeComponent, HeaderComponent, VideoComponent, PictureComponent],
  bootstrap:    [ BaseComponent ]
})
export class MainModule { }