import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RootDialogComponent} from "../root-dialog/root-dialog.component";
import {ApiService} from "../../app-core/api.service";


interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: number;
  phoneNumber: number;
  department: string;
}

@Component({
  selector: 'app-root-landing',
  templateUrl: './root-landing.component.html',
  styleUrls: ['./root-landing.component.scss']
})

export class RootLandingComponent implements OnInit {


  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getStudent();
  }

  studentData !: any;
  finalStudentData : Student[] = this.studentData;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'department'];
  dataSource = this.studentData;


  openDialog() {
    const dialogRef = this.dialog.open(RootDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public getStudent(){
    this.api.getStudent().subscribe(res =>{
      this.studentData = res;
    })
  }

}
