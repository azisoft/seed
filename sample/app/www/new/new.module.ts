import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import { NewRoutingModule } from './new-routing.module';

@NgModule({
  imports: [CommonModule, NewRoutingModule],
  declarations: [NewComponent],
  exports: [NewComponent]
})
export class NewModule { }
