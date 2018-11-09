import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
=== SharedModule ===
usually a set of components or services that will be reused 
in other application modules, not applied globally. They 
can be imported by feature modules.
*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
