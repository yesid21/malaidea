import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingChatComponent } from './components/floating-chat/floating-chat.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProductGalleryComponent,
    FooterComponent,
    FloatingChatComponent,
    PopularProductsComponent,
    TiendaComponent,
    ProductDetailComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
