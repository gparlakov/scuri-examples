import { Router } from '@angular/router';
import { MyComComponent } from './my-com.component';
import { autoSpy } from 'autospy';

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
    it('do not mention the method name in the title', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.aTestMethod();
        // assert
        // expect(c).toEqual
    });
    it('when the third method is called it should', () => {
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
    const router = autoSpy(Router);
    const builder = {
        router,
        default() {
            return builder;
        },
        build() {
            return new MyComComponent(router);
        }
    };

    return builder;
}
