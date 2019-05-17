import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListAboutComponent } from './task-list-about.component';

describe('TaskListAboutComponent', () => {
  let component: TaskListAboutComponent;
  let fixture: ComponentFixture<TaskListAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
