import { Component } from '@angular/core';

import { NewService } from './new.service';
import { ApiFactory } from '../api.factory'
import { NewData } from './new.newdata.data';

/**
 * This class represents the lazy loaded NewComponent.
 */
@Component({
  moduleId: module.id,
  providers: [NewService,ApiFactory],
  selector: 'sd-new',
  templateUrl: 'new.component.html',
  styleUrls: ['new.component.css']
})
export class NewComponent { 
  newData : NewData;

  constructor(newService: NewService) {
      this.newData = newService.getNewData();
  }
}
