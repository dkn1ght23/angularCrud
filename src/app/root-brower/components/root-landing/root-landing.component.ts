import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RootDialogComponent} from "../root-dialog/root-dialog.component";

@Component({
  selector: 'app-root-landing',
  templateUrl: './root-landing.component.html',
  styleUrls: ['./root-landing.component.scss']
})
export class RootLandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RootDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
