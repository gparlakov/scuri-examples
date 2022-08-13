import { of } from 'rxjs';

export class Service {
    property: string = 'just a prop';
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
