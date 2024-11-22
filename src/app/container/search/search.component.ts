import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   SearchTextBox : string ="";
    //3. create output 
     @Output()
   // 1 . Create a event
    SearchTextChanged: EventEmitter<string> = new EventEmitter<string>()
     // optiional 2nd arfument of @viewChild()
     // 1. read: use it to read  the diffrent token from the queried elements.
     //2. static: Determines when the query is resolved .
     //     true is when the view is initialized (before the first change detection)
     //  false if you want it to be resoolved after every change detection
    @ViewChild('#searchInput ',) searchInputEl : ElementRef
    // 2. calll the input 
    onSearchTextChanged(){
     
    }

   UpdateEvent(){
      // this.SearchTextBox = event.target.value
      // console.log(inputEl.value);

      this.SearchTextBox = this.searchInputEl.nativeElement.value;
      this.SearchTextChanged.emit(this.SearchTextBox)
      
   }
  
}
