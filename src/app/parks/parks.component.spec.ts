import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksComponent } from './parks.component';

describe('ParksComponent', () => {
  let component: ParksComponent;
  let fixture: ComponentFixture<ParksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
