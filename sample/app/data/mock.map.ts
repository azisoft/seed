import { GetData } from './new_component/mock'

export class MockMap {
    public json: JSON;
    constructor(key: string) {
        switch(key) { 
            case 'new_data': {
                this.json = JSON.parse(JSON.stringify(GetData()));
            break;
            }
        }
    }
}

