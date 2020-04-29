
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtablaComponent } from './newtabla.component';

describe('NewtablaComponent', () => {
  let component: NewtablaComponent;
  let fixture: ComponentFixture<NewtablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

