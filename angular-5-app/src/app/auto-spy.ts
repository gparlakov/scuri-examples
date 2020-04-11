/** Create an object with methods that are autoSpy-ed to use as mock dependency */
export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
    const res: SpyOf<T> = {} as any;

    Object.keys(obj.prototype).forEach(key => {
        res[key] = jasmine.createSpy(key);
    });

    return res;
}

/**
 * Keeps the types of the properties and methods and adds the Spy properties to each.
 * That way we could instruct the mocked method what to return and inquire about the calls.
 * Also the `T &` part of the type is so that private members are part of the type signature.
 * For example `autoSpy(HttpClient)` will have the `private handler: HttpHandler` property only if the
 * SpyOf<T> begins with `T & {`
 * @example
 * it('should carry the types', () => {
 *     // arrange
 *     const ser1 = autoSpy(Service);
 *     ser1.method.and.returnValue(' some value');
 *     // act
 *     const res = ser1.method();
 *
 *     // assert
 *     expect(ser1.method).toHaveBeenCalled();
 *     expect(res).toBe('test');
 * });
 *
 * export class Service {
 *  property: string;
 *  method() {
 *     return 'true';
 *  }
 * }
 */
type SpyOf<T> = T &
    {
        [k in keyof T]: T[k] & jasmine.Spy;
    };
