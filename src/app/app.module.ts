import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MonthlyExclusiveComponent } from './monthly-exclusive/monthly-exclusive.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CommunityComponent } from './community/community.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MonthlyExclusiveComponent,
    BestSellerComponent,
    CommunityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
