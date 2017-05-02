import { NewData } from '../../new/new.newdata.data';

export function GetNewData() : NewData {
    return new NewData(
      'Angular Seed is a starter project that implements best practices in coding, building and testing Angular apps.',
      '<h2>Gezukam draga - from mock</h2>',
      [
        'Ready to go, statically typed build system using Gulp for working with TypeScript.',
        'Production and development builds.',
        'Sample unit tests with Jasmine and Karma including code coverage via Istanbul.',
        'End-to-end tests with Protractor.',
        'Development server with live reload.',
        'TypeScript definition management using Types.',
        'Basic Service Worker, which implements "Cache then network strategy".'
      ]);
}
