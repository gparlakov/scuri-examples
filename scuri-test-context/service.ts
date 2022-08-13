import { of } from 'rxjs';

export class Service {
    property: string;
    method() {
        return 'true';
    }

    promiseReturning() {
        return Promise.resolve('a value');
    }

    observableReturning() {
        return of('a value')
    }
}
