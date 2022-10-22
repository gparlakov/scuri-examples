import { LibsApiService } from './libs-api.service';
import { AppComponent } from './app.component';
import { autoSpy } from 'autoSpy';
import { EMPTY } from 'rxjs';

describe('AppComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    a.ngOnInit();
    // assert
    // expect(a).toEqual
  });
  
});

function setup() {
  
    const usersApi = autoSpy(LibsApiService);
    
  const builder = {
    usersApi,
    withUsersApiGetAllReturn(g: Observable<Lib[]>) {
        usersApi.getAll.and.returnValue(g);
        return builder;
    },
    default() {
      return builder;
    },
    build() {
      return new AppComponent(usersApi);
    }
  };

  return builder;
}
