import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTopComponent } from './data-table-top.component';

describe('DataTableTopComponent', () => {
  let component: DataTableTopComponent;
  let fixture: ComponentFixture<DataTableTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
