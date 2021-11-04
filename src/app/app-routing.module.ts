import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BeverageComponent } from './beverage/beverage.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { GranolaComponent } from './granola/granola.component';
import { HomeComponent } from './home/home.component';
import { InstantMealsComponent } from './instant-meals/instant-meals.component';
import { LoginComponent } from './login/login.component';
import { NutComponent } from './nut/nut.component';
import { SpreadComponent } from './spread/spread.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'spread', component: SpreadComponent },
  { path: 'nut', component: NutComponent },
  { path: 'beverage', component: BeverageComponent },
  { path: 'granola', component: GranolaComponent },
  { path: 'instant-meals', component: InstantMealsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
