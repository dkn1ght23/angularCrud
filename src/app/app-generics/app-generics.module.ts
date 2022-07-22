import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
    declarations: [
        TopNavComponent
    ],
    exports: [
        TopNavComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class AppGenericsModule { }
