import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }   from './home.component';
import { HeaderComponent } from './../header/header.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent, HeaderComponent],
  bootstrap:    [ HomeComponent ]
})
export class MainModule { }