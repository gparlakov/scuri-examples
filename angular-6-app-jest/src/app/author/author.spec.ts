import { Author, AuthorService } from "./author";

import { AuthorComponent } from "./author.component";

describe("AuthorComponent", () => {
  it("should display the author when found by id", () => {
    const service = autoSpy(AuthorService);
    service.getAuthor
      .mockReturnValue({ name: "test" });
    const c = new AuthorComponent(service);
    c.ngOnInit();
    expect(c.author).toEqual({ name: "test" });
  });

  it("should show a ts error", () => {
    const service = autoSpy(AuthorService);

    service.name = "my author";
    expect(true).toBe(true);
  })
});

type SpyOf<T> = T &
  {
    [k in keyof T]: T[k] extends (...args: any[]) => infer R ? jest.Mock<R> : T[k];
  };

export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as any;

      const keys = Object.getOwnPropertyNames(obj.prototype);
      keys.forEach((key) => {
        res[key] = jest.fn();
      });

      return res;
}
