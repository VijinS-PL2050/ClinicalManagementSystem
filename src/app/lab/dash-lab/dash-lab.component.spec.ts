import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLabComponent } from './dash-lab.component';

describe('DashLabComponent', () => {
  let component: DashLabComponent;
  let fixture: ComponentFixture<DashLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
