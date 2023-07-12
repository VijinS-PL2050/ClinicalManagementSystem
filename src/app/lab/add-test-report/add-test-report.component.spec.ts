import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestReportComponent } from './add-test-report.component';

describe('AddTestReportComponent', () => {
  let component: AddTestReportComponent;
  let fixture: ComponentFixture<AddTestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
