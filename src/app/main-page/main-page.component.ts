import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Books } from './../constants/library.constants';
import { book} from"../models/book";
import { BooksService} from '../books.service';
import { HttpClient } from '@angular/common/http';  //services
import { bookInterface } from './../models/interfaces';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  
  constructor(private booksService: BooksService,private http: HttpClient) {
    console.log("header component is created");
    console.log(`the value of my book is: ${this.myBook}`);
   // this.books=booksService.getBooksList();
    
    for(let i in this.parentbooks){    //(i is the index-arrays me and key-object me)
      let bookEntryDate=this.parentbooks[i].entrydate;
      if(typeof bookEntryDate!='object')
      {
      
      if(bookEntryDate!=undefined)
      this.parentbooks[i].entrydate=new Date(bookEntryDate.slice(0,4),bookEntryDate.slice(5,7)-1,bookEntryDate.slice(8));
      }
    }
    this.http.get<book[]>('http://localhost:8000/books').subscribe(
    response=>{                                 //response function using arrow function can also be written as function(response){}
       this.parentbooks = response;
    },error=>{
      alert("some error");
    }
    );     //observable means fetching no. of objects until server ends
 
  }
  public buttonstate=false;
  public nameValue="ABCD";
  public parentbooks: Array<book>;  //(Array of book dene se bookEntryDate ki type pta chalegi so date manage krni pdegi and we will change the type of entrydate from string to any and then compiler will not throw any error )
  public book2: bookInterface;

  @ViewChild(DataTableComponent) 
  private childName: DataTableComponent;

  public myBook=new book("Science","abcde");

  public showTable:boolean =true;
  public toggleTableVisibility()
  {
    this.showTable=!(this.showTable);
  }


  public selectbookname:string;                                               
  public bookselected(selectedbook)
  {
    this.selectbookname=selectedbook.title;
  }

  showAlert(valueFormLayout)
  {
    alert(`The value from layout is ${valueFormLayout}`);
  }

  public ShowAlerts()
  {
   this.childName.parentsharedMethod();
   alert("submit button");
  }
 
  ngOnInit() {
    this.book2={volume:1,title:"",entrydate:""};
  }
}
