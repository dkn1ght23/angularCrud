import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root-dialog',
  templateUrl: './root-dialog.component.html',
  styleUrls: ['./root-dialog.component.scss']
})
export class RootDialogComponent implements OnInit {

  dialogForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),
    DepartmentName: new FormControl('',[Validators.required]),
  })


  constructor() { }

  ngOnInit(): void {
  }

  addStudent(){
    console.log(this.dialogForm.value);
  }

}
