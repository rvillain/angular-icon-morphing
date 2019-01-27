import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularIconMorphingModule } from 'angular-icon-morphing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularIconMorphingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
