import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppGenericsModule} from "../app-generics/app-generics.module";
import { RootLandingComponent } from './components/root-landing/root-landing.component';
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule} from "@angular/material/dialog";
import { RootDialogComponent } from './components/root-dialog/root-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RootDefaultComponent,
    RootLandingComponent,
    RootDialogComponent
  ],
    imports: [
        BrowserModule,
        RootBrowserRoutingModule,
        BrowserAnimationsModule,
        AppGenericsModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowerModule { }
