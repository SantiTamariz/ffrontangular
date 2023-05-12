import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() handleNewCategory: EventEmitter<any> = new EventEmitter<any>();
  @Input() categories: any[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showNewCategory(): void {
    console.log("This is the data passed: " + JSON.stringify(this.categories))

    const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: {categories: this.categories}
    });
    
    console.log("This is after the dialog")
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
  } 

  handleNewCategoryItem(category : any){
    this.handleNewCategory.emit(category);
  }

  showNewProduct(){
    
  }

}
