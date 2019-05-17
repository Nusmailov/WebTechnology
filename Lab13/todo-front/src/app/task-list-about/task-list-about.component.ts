import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'app-task-list-about',
  templateUrl: './task-list-about.component.html',
  styleUrls: ['./task-list-about.component.css']
})
export class TaskListAboutComponent implements OnInit {

  public id: number;
  public taskList: any = {}
  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'), 10);
    if (this.id) {
      this.provider.getTaskListDetail(this.id).then(res => {
        this.taskList = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

  updateTaskList(){
    this.provider.updateTaskList(this.taskList).then(res => {
      this.taskList = res;
      this.location.back();
    });
  }

  deleteTaskList(){
    this.provider.deleteTaskList(this.taskList.id).then(() => {
      this.location.back();
    })
  }

}
