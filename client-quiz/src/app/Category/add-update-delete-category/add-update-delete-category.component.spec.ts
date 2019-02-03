import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteCategoryComponent } from './add-update-delete-category.component';

describe('AddUpdateDeleteCategoryComponent', () => {
  let component: AddUpdateDeleteCategoryComponent;
  let fixture: ComponentFixture<AddUpdateDeleteCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
