import { Injectable } from '@angular/core';
import { Observable , Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareableService {

  private rowValueSource = new Subject<any>();
  rowValue$ = this.rowValueSource.asObservable();
  dialogValue$ = this.rowValueSource.asObservable();

  constructor() { }

  sendValue(row: any){
    //console.log(row);
    this.rowValueSource.next(row);
  }

  sendDialog(dialog: any){
    this.rowValueSource.next(dialog);
  }

}
