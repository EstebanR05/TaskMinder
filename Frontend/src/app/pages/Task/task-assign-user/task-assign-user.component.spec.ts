import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignUserComponent } from './task-assign-user.component';

describe('TaskAssignUserComponent', () => {
  let component: TaskAssignUserComponent;
  let fixture: ComponentFixture<TaskAssignUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAssignUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAssignUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
