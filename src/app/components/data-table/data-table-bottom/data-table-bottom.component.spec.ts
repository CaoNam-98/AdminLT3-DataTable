import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBottomComponent } from './data-table-bottom.component';

describe('DataTableBottomComponent', () => {
  let component: DataTableBottomComponent;
  let fixture: ComponentFixture<DataTableBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
