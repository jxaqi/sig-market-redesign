import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MonthlyExclusiveComponent } from './monthly-exclusive/monthly-exclusive.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CommunityComponent } from './community/community.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpreadComponent } from './spread/spread.component';
import { NutComponent } from './nut/nut.component';
import { BeverageComponent } from './beverage/beverage.component';
import { GranolaComponent } from './granola/granola.component';
import { InstantMealsComponent } from './instant-meals/instant-meals.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MonthlyExclusiveComponent,
    BestSellerComponent,
    CommunityComponent,
    FooterComponent,
    ModalComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    BlogComponent,
    BlogDetailComponent,
    AboutUsComponent,
    SpreadComponent,
    NutComponent,
    BeverageComponent,
    GranolaComponent,
    InstantMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
