import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportGenerationComponent } from './list-report-generation.component';

describe('ListReportGenerationComponent', () => {
  let component: ListReportGenerationComponent;
  let fixture: ComponentFixture<ListReportGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
