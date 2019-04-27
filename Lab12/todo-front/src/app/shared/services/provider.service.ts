import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {ITask, ITaskDetailed,ITaskCreate,  ITaskList} from '../../shared/models/models'

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService  extends MainService{

  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://127.0.0.1:8000/api/taskList', {});
  }
  getTasksOfTaskList(id:number): Promise<ITaskDetailed[]>{
    return this.get(`http://127.0.0.1:8000/api/taskList/${id}/list`,{})
  }
  getTaskDetailed(id:number): Promise<ITaskList>{
    return this.get(`http://127.0.0.1:8000/api/taskList/${id}`,{})
  }

  createTaskList(name: any): Promise<ITaskList> {
    return this.post('http://127.0.0.1:8000/api/taskList', {
      name: name
    });
  }
  updateTaskList(taskList:ITaskList){
    return this.put(`http://127.0.0.1:8000/api/taskList/${taskList.id}/`,{
      name:taskList.name
    });
  }
  deleteTaskList(id:number):Promise<any>{
    return this.delet(`http://127.0.0.1:8000/api/taskList/${id}/`,{});
  }

  deleteTask(id:number):Promise<any>{
    return this.delet(`http://127.0.0.1:8000/api/tasks/${id}`,{})
  }
  updateTask(task:ITaskDetailed){
    return this.put(`http://127.0.0.1:8000/api/tasks/${task.id}`,{
      name:task.name,
      status:task.status,
    });
  }
  createTask(task:ITaskCreate,id:number){
    return this.post(`http://127.0.0.1:8000/api/taskList/${id}/list`,{
      name:task.name,
      status:task.status,
      task_list:id,
      created_at:task.created_at,
      due_on:task.due_on
    });
  }
}
