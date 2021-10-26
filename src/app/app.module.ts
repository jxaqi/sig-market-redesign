import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MonthlyExclusiveComponent } from './monthly-exclusive/monthly-exclusive.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MonthlyExclusiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
