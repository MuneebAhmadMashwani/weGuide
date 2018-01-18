import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusinessComponent } from './all-business.component';

describe('AllBusinessComponent', () => {
  let component: AllBusinessComponent;
  let fixture: ComponentFixture<AllBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
