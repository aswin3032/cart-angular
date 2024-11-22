import { Component, ViewChild} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class conatainerComponent {

 listOfString : string [] = ["mark,steve,max"]

   // 4. create a variable
  searchText : string = ''

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;
  // 6. call from the html 
  setSearchText(value : string){
    this.searchText = value;

  }
}
