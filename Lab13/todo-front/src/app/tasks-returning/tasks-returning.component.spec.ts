import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksReturningComponent } from './tasks-returning.component';

describe('TasksReturningComponent', () => {
  let component: TasksReturningComponent;
  let fixture: ComponentFixture<TasksReturningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksReturningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksReturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
