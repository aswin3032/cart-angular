import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detalils',
  templateUrl: './product-detalils.component.html',
  styleUrls: ['./product-detalils.component.css']
})
export class ProductDetalilsComponent {
  

   @Input() productListComp : ProductListComponent  =undefined
   product :product ;
   ngOnInit(){
    this.product = this.productListComp.selectedProduct;
    console.log(this.product.title);
    
   }
  }

 
