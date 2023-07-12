import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestsComponent } from './edit-tests.component';

describe('EditTestsComponent', () => {
  let component: EditTestsComponent;
  let fixture: ComponentFixture<EditTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
