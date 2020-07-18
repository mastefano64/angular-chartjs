import { ElementRef } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SaveImagePopupComponent } from '../saveimagepopup/saveimagepopup.component';

export class BaseChartComponent {
  dlg: MatDialog;

  constructor(dialog: MatDialog) {
    this.dlg = dialog;
  }

  onShowModalSearch(canvasRef: ElementRef) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    const ele = canvasRef.nativeElement;
    const imgURL = ele.toDataURL('image/png');
    dialogConfig.data = { image: imgURL };
    const dialogRef = this.dlg.open(SaveImagePopupComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

}
