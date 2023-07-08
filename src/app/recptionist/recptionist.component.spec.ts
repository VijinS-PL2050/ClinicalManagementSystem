import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecptionistComponent } from './recptionist.component';

describe('RecptionistComponent', () => {
  let component: RecptionistComponent;
  let fixture: ComponentFixture<RecptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
