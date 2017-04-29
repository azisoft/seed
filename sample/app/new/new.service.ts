import { Injectable } from '@angular/core';
import { NewData } from './new.newdata.data';

import { ApiFactory } from '../api.factory'

@Injectable()

export class NewService {
    constructor(private factory : ApiFactory) {}

    getNewData() : NewData {
      let json = this.factory.getData('new_data');
      return JSON.parse(json.toString());
    }
}