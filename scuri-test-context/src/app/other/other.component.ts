import { Component } from '@angular/core';
import { Service } from '../service';
import { take } from 'rxjs/operators';

const captains = console;
@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css']
})
export class OtherComponent {
    title = 'otherComponent';

    constructor(private s: Service) {
        this.title = s.method() ? this.title + s.method() : this.title;
    }

    anotherMethod() {
        this.s.promiseReturning().then(captains.log)
    }

    method() {
        this.s.observableReturning().pipe(take(1)).subscribe(v => captains.log('---observable value', v))
    }
}
