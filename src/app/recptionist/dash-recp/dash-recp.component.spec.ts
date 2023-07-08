import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRecpComponent } from './dash-recp.component';

describe('DashRecpComponent', () => {
  let component: DashRecpComponent;
  let fixture: ComponentFixture<DashRecpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRecpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashRecpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
