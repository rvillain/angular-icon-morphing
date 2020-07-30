import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularIconMorphingModule } from '../../projects/angular-icon-morphing/src/lib/angular-icon-morphing.module';
import { AppComponent } from './app.component';


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
