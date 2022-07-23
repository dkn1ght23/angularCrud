import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareableService {

  private rowValueSource = new Subject<any>();
  rowValue$ = this.rowValueSource.asObservable();

  constructor() { }

  sendValue(row: any){
    console.log(row);
    this.rowValueSource.next(row);
  }

}
