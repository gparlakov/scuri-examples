import { HttpClient } from '@angular/common/http';
import { Service } from './service';
import { AppComponent } from './app.component';
import { autoSpy } from 'autoSpy';

describe('AppComponent', () => {
  it('when publicMethod is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.publicMethod();
    // assert
    // expect(c).toEqual
  });

  it('when explicitPublicMethod is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.explicitPublicMethod();
    // assert
    // expect(c).toEqual
  });

  it('when asyncPublicMethod is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.asyncPublicMethod();
    // assert
    // expect(c).toEqual
  });

  
});

function setup() {
  const rest = autoSpy(HttpClient);
const oneMore = autoSpy(Service);
  const builder = {
    rest,
oneMore,
    default() {
      return builder;
    },
    build() {
      return new AppComponent(rest,oneMore);
    }
  };

  return builder;
}
