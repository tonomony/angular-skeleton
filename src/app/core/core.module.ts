import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
=== CoreModule ===
core functionalities, mostly global services, that will be
used in the whole application globally. They should not be 
imported by other application modules
*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { }
