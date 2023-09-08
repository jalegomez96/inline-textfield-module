import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineTextfieldModule } from './inline-textfield/inline-textfield.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InlineTextfieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
