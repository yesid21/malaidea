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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
