import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-saveimagepopup',
  templateUrl: './saveimagepopup.component.html',
  styleUrls: ['./saveimagepopup.component.css']
})
export class SaveImagePopupComponent {
  image: string;

  constructor(private dialogRef: MatDialogRef<SaveImagePopupComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    this.image = data.image;
  }

  onClose() {
    this.dialogRef.close();
  }

}
