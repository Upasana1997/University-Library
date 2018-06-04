import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class RequestBookComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

 public submitBookRequestForm(bookForm)
  {
    console.log("Request submitted for form: ");  //+bookForm.value);
    let bookToBeAdded=bookForm.value;
    console.log(bookToBeAdded);
    this.http.post('http://localhost:8000/books/addBook',bookToBeAdded,{observe: 'response'})
    .subscribe(response=>{
      
      let status = response.status;
      console.log(response);
    })
  }

}
