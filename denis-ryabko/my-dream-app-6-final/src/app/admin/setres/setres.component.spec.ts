import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetresComponent } from './setres.component';

describe('SetresComponent', () => {
  let component: SetresComponent;
  let fixture: ComponentFixture<SetresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
