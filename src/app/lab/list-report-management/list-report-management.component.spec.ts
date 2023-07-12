import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportManagementComponent } from './list-report-management.component';

describe('ListReportManagementComponent', () => {
  let component: ListReportManagementComponent;
  let fixture: ComponentFixture<ListReportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
