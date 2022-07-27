import { Injectable } from '@angular/core';
import { Observable , Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareableService {

  public subjectSource = new Subject<any>();
  public subjectSourceTwo = new Subject<any>();
  public subjectSourceUpdate = new Subject<any>();

  //update button boolean value
  updateValue(token: boolean){
    this.subjectSourceUpdate.next(token);
  }

  //serial id from edit button
  rowValue(row: any){
    this.subjectSource.next(row);
  }

  //dialog form
  dialogValue(value: any){
    this.subjectSourceTwo.next(value)
  }


}
