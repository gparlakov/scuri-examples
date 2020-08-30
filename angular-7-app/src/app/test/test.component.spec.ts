import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    }).configureTestingModule({ providers: [{ provide: ElementRef, useValue: a.e },
            { provide: Input, useValue: a.p }] }).configureTestingModule({ providers: [{ provide: ElementRef, useValue: a.e },
            { provide: Input, useValue: a.p }] })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const c = build();
        // act
        c.ngOnInit();
        // assert
        // expect(c).toEqual
    });
});

function setup() {
    const e = autoSpy(ElementRef);
    const p = autoSpy(Input);
    const builder = {
        e,
        p,
        default() {
            return builder;
        },
        build() {
            return new TestComponent(e, p);
        }
    }
    return builder;
}