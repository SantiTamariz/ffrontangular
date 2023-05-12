import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  newCategoryName = '';
  //@Input() categories: any[] = [];
  @Output() handleNewCategory: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<NewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any[]) { }

  ngOnInit(): void {
    console.log("New Category Component is now available");
    console.log(this.data);
  }

  handleNewCategorySave() {
    const maxId = this.data.reduce((max, data) => (data.id > max ? data.id : max), 0);

    if (this.newCategoryName) {
      const newCategory = {
        id: maxId + 1,
        name: this.newCategoryName,
      };

      // Emit the new category to the parent component
      this.handleNewCategory.emit(newCategory);

      // Clear the input field
      this.newCategoryName = '';
    }
  }

  hideNewCategory() {
    // Replace with actual implementation to hide modal
    console.log('Hiding new category modal');
  }

  onSave() {
    this.handleNewCategorySave();
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }
}
