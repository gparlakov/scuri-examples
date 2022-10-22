import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lib, LibsApiService } from './libs-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-14-app';
  libs$: Observable<Lib[]> = of([]);

  constructor(private usersApi: LibsApiService) {}

  ngOnInit() {
    this.libs$ = this.usersApi.getAll()
  }
}
