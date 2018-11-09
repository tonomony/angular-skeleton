import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'feature01',
  //   loadChildren: './feature01/feature01.module#Feature01Module'
  // },
  // {
  //   path: 'feature02',
  //   loadChildren: './feature02/feature02.module#Feature02Module'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
