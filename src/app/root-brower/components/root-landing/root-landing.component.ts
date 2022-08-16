import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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

export class RootLandingComponent implements OnInit, OnDestroy {

  dialogForm !: any;
  subscription: any;

  constructor(public dialog: MatDialog,
              private api: ApiService,
              private shareService: ShareableService) {

  }

  ngOnInit(): void {
    this.getStudent();

    this.shareService.subjectSourceTwo.subscribe(res => {
      this.dialogForm = res;
      //console.log(this.dialogForm);
    });

    //function call
    this.subscription = this.shareService.functionCallSubject.subscribe((event) => {
      this.getStudent();
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  studentData !: any;
  finalStudentData : Student[] = this.studentData;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'department', 'action'];
  dataSource = this.studentData;

  loadingId !: any
  updateToken !: boolean;

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
    this.updateToken = true;
    this.loadingId = row.id
    //console.log(this.loadingId)
    this.shareService.rowValue(this.loadingId);
    this.shareService.updateValue(this.updateToken);

    this.dialogForm.controls.FirstName.setValue(row.firstName);
    this.dialogForm.controls.LastName.setValue(row.lastName);
    this.dialogForm.controls.Email.setValue(row.email);
    this.dialogForm.controls.PhoneNumber.setValue(row.phoneNumber);
    this.dialogForm.controls.DepartmentName.setValue(row.department);
  }

}
