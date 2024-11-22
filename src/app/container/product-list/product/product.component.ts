import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/Product';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
product:product; 
}