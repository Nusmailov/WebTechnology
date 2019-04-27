import { Component, OnInit } from '@angular/core';
import {ITask, ITaskDetailed, ITaskList} from '../shared/models/models'
import {ProviderService} from "../shared/services/provider.service"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public taskLists:ITaskList[]=[];
  public task:ITask[]=[]
  public taskDetailed={
    
  }
  constructor(private provider:ProviderService) { 
  }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res
    });
  }
  
  getTasksOfTaskList(taskList:ITaskList){
    this.provider.getTasksOfTaskList(taskList.id).then(data=>{
      this.task=data
    }

    )
  }

  getTaskDetailed(task:ITask){
    this.provider.getTaskDetailed(task.id).then(data=>{
      this.taskDetailed=data
      console.log(data)
    }

    )
  }


}
