import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { AngularIconMorphingModule } from 'angular-icon-morphing';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent
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
