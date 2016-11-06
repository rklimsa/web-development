import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideoComponent }   from './video.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ VideoComponent ],
  bootstrap:    [ VideoComponent ]
})
export class HeaderModule { }