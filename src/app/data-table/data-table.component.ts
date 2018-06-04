import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core'; //Input used in angular 4 to get input from parent component

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit {

  @Input() childbooks; //data has to come from parent component (parent->child)
                   //dacorator added books ,this is from Input;
  @Output()  selectbook=new EventEmitter();    //childbooks will give some output to parent component (child->parent)
  constructor() { }

  ngOnInit() {
  }

public bookselected(selectedbook)
{
  this.selectbook.emit(selectedbook);
  console.log(`book selected : ${selectedbook}`);
}

public parentsharedMethod()
{
  alert("shared method called from parent");
}
}
