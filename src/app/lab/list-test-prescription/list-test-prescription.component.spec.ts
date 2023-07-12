import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestPrescriptionComponent } from './list-test-prescription.component';

describe('ListTestPrescriptionComponent', () => {
  let component: ListTestPrescriptionComponent;
  let fixture: ComponentFixture<ListTestPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTestPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTestPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
