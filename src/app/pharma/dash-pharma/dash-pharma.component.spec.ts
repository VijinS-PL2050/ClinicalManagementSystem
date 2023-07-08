import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPharmaComponent } from './dash-pharma.component';

describe('DashPharmaComponent', () => {
  let component: DashPharmaComponent;
  let fixture: ComponentFixture<DashPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPharmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
