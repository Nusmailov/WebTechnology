import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ITaskC} from '../shared/models/models';


@Component({
  selector: 'app-tasks-returning',
  templateUrl: './tasks-returning.component.html',
  styleUrls: ['./tasks-returning.component.css']
})
export class TasksReturningComponent implements OnInit {

  public tasks: ITaskC[] = [];
  public id: number;
  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public taskName: string;
  public taskDueOn: any = new Date().toISOString();
  public taskStatus: string;

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.id) {
      this.provider.getTaskListTasks(this.id).then(res => {
        this.tasks = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

  createTask(){
    if(this.taskName != '' && this.taskDueOn != '' && this.taskStatus != ''){
      this.provider.createTask(this.id, this.taskName, this.taskDueOn, this.taskStatus).then(res => {
        this.tasks.push(res);
      });
    }
  }

}
