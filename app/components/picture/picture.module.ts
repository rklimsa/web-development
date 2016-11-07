import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PictureComponent }   from './picture.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PictureComponent ],
  bootstrap:    [ PictureComponent ]
})
export class HeaderModule { }