import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessetupComponent } from './ressetup.component';

describe('RessetupComponent', () => {
  let component: RessetupComponent;
  let fixture: ComponentFixture<RessetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
