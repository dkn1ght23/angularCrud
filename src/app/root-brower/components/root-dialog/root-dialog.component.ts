import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {studentModel} from "../../app-core/student.model";
import {ApiService} from "../../app-core/api.service";
import { RootLandingComponent } from '../root-landing/root-landing.component';
import {ShareableService} from "../../app-core/shareable.service";


@Component({
  selector: 'app-root-dialog',
  templateUrl: './root-dialog.component.html',
  styleUrls: ['./root-dialog.component.scss']
})
export class RootDialogComponent implements OnInit {

  /*@ViewChild(RootLandingComponent) landingComponent !: RootLandingComponent;*/

  @Input() dialogID : any;
  finalID !: any;

  rowID !: any;

  studentModelObj: studentModel = new studentModel();

  dialogForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),
    DepartmentName: new FormControl('',[Validators.required]),
  })

  constructor(private api: ApiService,
              private ShareableService: ShareableService) { }


  ngOnInit()  {
    this.ShareableService.rowValue$
      .subscribe(res => {
        this.rowID = res;
        console.log(this.rowID);
    })
  }

  postStudent(){
    this.studentModelObj.firstName = this.dialogForm.value.FirstName;
    this.studentModelObj.lastName = this.dialogForm.value.LastName;
    this.studentModelObj.email = this.dialogForm.value.Email;
    this.studentModelObj.phoneNumber = this.dialogForm.value.PhoneNumber;
    this.studentModelObj.department = this.dialogForm.value.DepartmentName;

    this.api.postStudent(this.studentModelObj).subscribe(res =>{
      console.log(res);
      alert('successful')
      let ref = document.getElementById('cancel');
      ref?.click();
      this.dialogForm.reset();

     },err => {
      alert("something went wrong")
    })

  }

  updateStudent(){
    console.log(this.rowID);
    this.studentModelObj.firstName = this.dialogForm.value.FirstName;
    this.studentModelObj.lastName = this.dialogForm.value.LastName;
    this.studentModelObj.email = this.dialogForm.value.Email;
    this.studentModelObj.phoneNumber = this.dialogForm.value.PhoneNumber;
    this.studentModelObj.department = this.dialogForm.value.DepartmentName;

    this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res => {
      alert('updated')
      let ref = document.getElementById('cancel');
      ref?.click();
      this.dialogForm.reset();
    })
  }

  /*ngAfterViewInit(): void {
    console.log('after the call')
    console.log(this.landingComponent.getStudent())
  }*/

}
