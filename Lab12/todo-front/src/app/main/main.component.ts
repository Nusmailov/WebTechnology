import { Component, OnInit, Input, Output} from '@angular/core';
import {ITask, ITaskDetailed, ITaskList, ITaskCreate} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public taskLists:ITaskList[]=[];
  public task:ITaskDetailed[]=[];

  public taskCreate:ITaskCreate = {
    name : "",
    status: "",
    created_at: "2014-04-03T04:33:16Z",
    due_on: "2019-04-03T02:10:00Z"
  };
  public taskList="";
  public taskListId = 0;
  public taskDetailed:any;
  public name: any = ''
  public showTasks = false
  public showTask = false
  public showCreateTask = false
  constructor(private provider: ProviderService) {

  }


  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res
    });
  }

  getTasksOfTaskList(taskList:any){
    this.provider.getTasksOfTaskList(taskList.id).then(data=>{
        this.showTasks=true
        this.showTask=false
        this.taskListId = taskList.id
        this.showCreateTask=true
        console.log(this.taskListId);
        this.task=data;
      }
    )
  }

  getTaskDetailed(task:ITaskDetailed){
    this.provider.getTaskDetailed(task.id).then(data=>{
        this.showTask = true;
        this.taskDetailed = data;
      }
    )
  }

  createTaskList() {
    if (this.name !== '') {
      this.provider.createTaskList(this.name).then(res => {
        this.taskLists.push(res);
        this.name = "";
      })
    }
  }
  updateTaskList(taskList:ITaskList){
    this.provider.updateTaskList(taskList).then(res=>{})
  }
  deleteTaskList(taskList:ITaskList){
    this.provider.deleteTaskList(taskList.id).then(res=>{
      this.provider.getTaskLists().then(data=>{
        this.taskLists=data
      })
    })
  }
  deleteTask(task:ITaskDetailed){
    this.provider.deleteTask(task.id).then(res=>{
      this.showTask=false;
      this.taskDetailed.id=0;
      this.taskDetailed.name = '';
      this.taskDetailed.created_at='';
      this.taskDetailed.due_on='';
      this.taskDetailed.status='';
    })

  }
  updateTask(task:ITaskDetailed){
    this.provider.updateTask(task).then(res=>{

    })
  }
  createTask(){
    this.provider.createTask(this.taskCreate, this.taskListId).then(res => {
        this.task.push(res);
        this.name = "";
    })
  }

}
