import { GetNewData } from './new_component/mock'

export class MockMap {
    public json: any;
    constructor(key: string) {
        switch(key) { 
            case 'new_data': {
                this.json = GetNewData();
            break;
            }
        }
    }
}

