import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeOneComponent } from './components/pages/home/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { CareerComponent } from './components/pages/careers/career.component';
import { NewsMediaComponent } from './components/pages/news-media/news-media.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { RefferalComponent } from './components/pages/refferal/refferal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeOneComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    PartnersComponent,
    CareerComponent,
    NewsMediaComponent,
    ServicesComponent,
    SignInComponent,
    RefferalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
