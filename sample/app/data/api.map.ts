import * as _ from 'lodash'

export enum Verb{
    GET,
    POST,
    PUT,
    DELETE
}

export class ApiMapItem {
    constructor(private key: string, public verb: Verb, public url: string, public method: string){ }
    public is(key: string) : boolean { return this.key == key; }
}

export class ApiMap {
    public item: ApiMapItem;
    private _map: ApiMapItem[]  = buildMap();
    
    constructor(key: string, apiUrl: string){
        this.item = _.find(this._map, (i) => i.is(key) );
        this.item.url = this.item.url || apiUrl;
    }
}

function buildMap() :  ApiMapItem[] {
    return [
        new ApiMapItem('new_data', Verb.GET, null, '/api/new'),
        new ApiMapItem('test_POST', Verb.POST, null, '/api/create'),
        new ApiMapItem('test_PUT', Verb.POST, null, '/api/update'),
        new ApiMapItem('test_DELETE', Verb.POST, null, '/api/delete')
    ];
}