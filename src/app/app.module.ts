import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { TopHeaderComponent} from './top-header/top-header.component';
import { TopMenuComponent } from './Header/top-menu/top-menu.component';
import { MainMenuComponent } from './Header/main-menu/main-menu.component';
import { conatainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetalilsComponent } from './container/product-detalils/product-detalils.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchComponent,
    conatainerComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetalilsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
