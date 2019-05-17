import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAboutComponent } from './task-about.component';

describe('TaskAboutComponent', () => {
  let component: TaskAboutComponent;
  let fixture: ComponentFixture<TaskAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
