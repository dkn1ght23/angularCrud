import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {studentModel} from "../../app-core/student.model";
import {ApiService} from "../../app-core/api.service";
import { RootLandingComponent } from '../root-landing/root-landing.component';


@Component({
  selector: 'app-root-dialog',
  templateUrl: './root-dialog.component.html',
  styleUrls: ['./root-dialog.component.scss']
})
export class RootDialogComponent implements OnInit, OnChanges {

  /*@ViewChild(RootLandingComponent) landingComponent !: RootLandingComponent;*/

  @Input() dialogID : any;
  finalID !: any;

  studentModelObj: studentModel = new studentModel();

  dialogForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),
    DepartmentName: new FormControl('',[Validators.required]),
  })

  constructor(private api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    /*this.idCall();*/
  }

  ngOnInit(): void {
    /*this.idCall();*/
  }

  /*idCall(){
    if(!this.dialogID){
      return;
    }
    this.finalID = this.dialogID;
    console.log(this.finalID)
  }*/

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
    /*this.studentModelObj.id = id;
    console.log(this.studentModelObj.id);
    console.log(id);*/
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
