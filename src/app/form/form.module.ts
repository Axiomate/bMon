import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormRoutingModule } from './form-routing.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormRoutingModule,
    
  ]
})
export class FormModule { }
