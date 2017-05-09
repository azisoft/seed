import * as _ from 'lodash'

enum Verb{
    GET,
    POST,
    PUT,
    DELETE
}

export class ApiMapItem {
    constructor(public key: string, public verb: Verb, public url: string, public method: string, public params: [string,string][]){}
}

export class ApiMap {
    public item: ApiMapItem;
    private _map: ApiMapItem[]  = buildMap();
    
    constructor(key: string, apiUrl: string){
        this.item = _.find(this._map, function(i) { return i.key == key });
        this.item.url = this.item.url || apiUrl;
    }
}

function buildMap() :  ApiMapItem[]{
    return [
        new ApiMapItem('new_data', Verb.GET, null, '/api/new', [])
    ];
}