import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
