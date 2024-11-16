import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChangeComponent } from './modal-change.component';

describe('ModalChangeComponent', () => {
  let component: ModalChangeComponent;
  let fixture: ComponentFixture<ModalChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
