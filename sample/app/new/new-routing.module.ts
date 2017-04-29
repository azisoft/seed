import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'new', component: NewComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NewRoutingModule { }
