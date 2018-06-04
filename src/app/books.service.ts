import { Injectable } from '@angular/core';
import { Books } from './constants/library.constants';

@Injectable()
export class BooksService {

  private books=Books;

  constructor() { }
  
  public getBooksList()
  {
    return Books;
  }
 
}
