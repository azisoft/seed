import { Injectable } from '@angular/core';
import { Config } from './config'
import { Http, Headers } from '@angular/http';
import { Verb } from './data/api.map';

import 'rxjs/add/operator/toPromise';

import { MockMap } from './data/mock.map'
import { ApiMap } from './data/api.map'

@Injectable()

export class ApiFactory {
    //private _headers : Headers = new Headers();
    private _config : Config = new Config();

    constructor(private http: Http){ }

    getData(key: string, parameters: any) : Promise<any> {
        if(this._config.isMock){
            return this.getMockData(key);
        }
        return this.getHttpData(key, parameters);
    }

    private getMockData(key: string) : Promise<any> {
        return new Promise((resolve,reject) => resolve(new MockMap(key).json));
    }

    private getHttpData(key: string, parameters : any) : Promise<any> {
        var item = new ApiMap(key, this._config.apiUrl)
        switch(item.item.verb){
            case Verb.GET:
            {
                let params: URLSearchParams = this.objToSearchParams(parameters);
                return this.http.get(item.item.url + item.item.method)
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
            }
            case Verb.PUT:
            {
                return this.http.put(
                        item.item.url + item.item.method,
                        JSON.stringify(parameters), 
                        {headers: new Headers({'Content-Type': 'application/json'})})
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
            }
            case Verb.POST:
            {
                return this.http.post(
                        item.item.url + item.item.method,
                        JSON.stringify(parameters), 
                        {headers: new Headers({'Content-Type': 'application/json'})})
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
            }
            case Verb.DELETE:
            {
                if(parameters && parameters.id){
                    return this.http.delete(
                            `${item.item.url}${item.item.method}\id=${parameters.id}`,
                            {headers: new Headers({'Content-Type': 'application/json'})})
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
                } else {
                    return Promise.reject(`ID not supplied to a DELETE verb.`);
                }
            }
            default:
                return Promise.reject(`Verb ${item.item.verb} is not handled`);
        }
    }

    private handleError(error: any): Promise<any> {
        let errMsg: string = error.message || error.toString();
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private objToSearchParams(obj : any): URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                params.set(key, obj[key]);
        }
        return params;
    }
}