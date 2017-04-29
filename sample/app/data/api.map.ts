enum Verb{
    GET,
    PUT,
    DELETE
}

export class ApiMapItem {
    constructor(verb: Verb, url: string, method: string, params: [string,string][]){}
}

export class ApiMap {
    _map: ApiMapItem[]  = [
        new ApiMapItem(Verb.GET, '', '', [])
    ];
    
}