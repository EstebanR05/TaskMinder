import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaggerComponent } from './managger.component';

describe('ManaggerComponent', () => {
  let component: ManaggerComponent;
  let fixture: ComponentFixture<ManaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManaggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
