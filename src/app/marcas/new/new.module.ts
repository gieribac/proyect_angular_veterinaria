import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NewModule { }
