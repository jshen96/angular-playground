import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persons } from './persons.component';

describe('Persons', () => {
  let component: Persons;
  let fixture: ComponentFixture<Persons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Persons ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
