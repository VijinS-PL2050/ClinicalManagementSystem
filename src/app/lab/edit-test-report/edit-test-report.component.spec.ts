import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestReportComponent } from './edit-test-report.component';

describe('EditTestReportComponent', () => {
  let component: EditTestReportComponent;
  let fixture: ComponentFixture<EditTestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
