import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTextfieldComponent } from './inline-textfield.component';

describe('InlineTextfieldComponent', () => {
  let component: InlineTextfieldComponent;
  let fixture: ComponentFixture<InlineTextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTextfieldComponent]
    });
    fixture = TestBed.createComponent(InlineTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
