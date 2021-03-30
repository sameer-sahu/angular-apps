import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PostFilter } from './post-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
