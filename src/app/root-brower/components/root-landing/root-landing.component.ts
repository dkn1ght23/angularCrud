import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RootDialogComponent} from "../root-dialog/root-dialog.component";
import {ApiService} from "../../app-core/api.service";
import {ShareableService} from "../../app-core/shareable.service";


interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: number;
  phoneNumber: number;
  department: string;
  action: any;
}

@Component({
  selector: 'app-root-landing',
  templateUrl: './root-landing.component.html',
  styleUrls: ['./root-landing.component.scss']
})

export class RootLandingComponent implements OnInit {


  constructor(public dialog: MatDialog,
              private api: ApiService,
              private ShareableService: ShareableService) { }

  ngOnInit(): void {
    this.getStudent();
  }

  studentData !: any;
  finalStudentData : Student[] = this.studentData;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'department', 'action'];
  dataSource = this.studentData;

  loadingId !: any

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

  deleteStudent(row: any){
    this.api.deleteStudent(row.id).subscribe((res =>{
      alert('Student is deleted');
      this.getStudent();
    }))
  }

  onEdit(row: any){
    this.loadingId = row.id
    console.log(this.loadingId)
    this.ShareableService.sendValue(this.loadingId);
  }

}
