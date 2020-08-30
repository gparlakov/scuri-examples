import { MyComComponent } from './my-com.component';
import { autoSpy } from 'autoSpy';

describe('MyComComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngOnInit();
    // assert
    // expect(c).toEqual
  });
  it('when not mentioned method name is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.another();
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  const builder = {
    default() {
      return builder;
    },
    build() {
      return new MyComComponent();
    },
  };

  return builder;
}
