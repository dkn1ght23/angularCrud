import {Component, OnInit, } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {studentModel} from "../../app-core/student.model";
import {ApiService} from "../../app-core/api.service";
import {ShareableService} from "../../app-core/shareable.service";

@Component({
  selector: 'app-root-dialog',
  templateUrl: './root-dialog.component.html',
  styleUrls: ['./root-dialog.component.scss']
})
export class RootDialogComponent implements OnInit {

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
              private shareService: ShareableService) {

    this.shareService.rowValue$.subscribe(res => {
      this.rowID = res;
    })
    this.shareService.sendDialog(this.dialogForm);
  }


  ngOnInit()  {

  }


  setData(){
    this.studentModelObj.firstName = this.dialogForm.value.FirstName;
    this.studentModelObj.lastName = this.dialogForm.value.LastName;
    this.studentModelObj.email = this.dialogForm.value.Email;
    this.studentModelObj.phoneNumber = this.dialogForm.value.PhoneNumber;
    this.studentModelObj.department = this.dialogForm.value.DepartmentName;
  }

  postStudent(){

    this.setData()
    this.api.postStudent(this.studentModelObj).subscribe(res => {
      console.log(res);
      console.log(res);
      let ref = document.getElementById('cancel');
      ref?.click();
      this.dialogForm.reset();
    })

  }

  updateStudent(){
    this.studentModelObj.id = this.rowID;
    console.log(this.studentModelObj.id)
    this.setData()

    this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res => {
      alert('updated')
      let ref = document.getElementById('cancel');
      ref?.click();
      this.dialogForm.reset();
    })
  }

}
