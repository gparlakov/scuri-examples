import { AppComponent } from './app.component';
import { autoSpy } from 'autoSpy';
import { EMPTY } from 'rxjs';

describe('AppComponent', () => {
  
  it('it should construct', () => {
    // arrange
    const { build } = setup().default();
    // act
    const a = build();
    // assert
    // expect(a).toEqual
  });
  
});

function setup() {
  
  const builder = {
    
    default() {
      return builder;
    },
    build() {
      return new AppComponent();
    }
  };

  return builder;
}
