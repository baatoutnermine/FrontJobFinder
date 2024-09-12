import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { CategoryComponent } from './category/category.component';
import { OffersComponent } from './offers/offers.component';
import { BannerComponent } from './banner/banner.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    OfferDetailComponent,
    CategoryComponent,
    OffersComponent,
    BannerComponent,
    AboutSiteComponent,
    TestimonialComponent,
    BlogAreaComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
