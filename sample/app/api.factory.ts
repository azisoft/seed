import { Injectable } from '@angular/core';
import { Config } from './config'
import { Http, Response } from '@angular/http';

import { MockMap } from './data/mock.map'

@Injectable()

export class ApiFactory {
    private _headers : Headers = new Headers();
    private _config : Config = new Config();

    constructor(private http: Http){ }

    getData(key: string) : JSON {
        if(this._config.isMock){
            return this.getMockData(key);
        }
        return this.getHttpData(key);
    }

    private getMockData(key: string) : JSON {
        return new MockMap('key').json;
    }

    private getHttpData(key: string) : JSON {
        return JSON.parse('{}');
    }
}