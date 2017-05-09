import { Injectable } from '@angular/core';
import { Config } from './config'
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MockMap } from './data/mock.map'
import { ApiMap } from './data/api.map'

@Injectable()

export class ApiFactory {
    //private _headers : Headers = new Headers();
    private _config : Config = new Config();

    constructor(private http: Http){ }

    getData(key: string) : Promise<any> {
        if(this._config.isMock){
            return this.getMockData(key);
        }
        return this.getHttpData(key);
    }

    private getMockData(key: string) : Promise<any> {
        return new Promise((resolve,reject) => resolve(new MockMap(key).json));
    }

    private getHttpData(key: string) : Promise<any> {
        var item = new ApiMap(key, this._config.apiUrl)
        return this.http.get(item.item.url + item.item.method)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        let errMsg: string = error.message || error.toString();
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}