import { EventEmitter, Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {ITaskD, ITaskList, ITaskC, ITaskCreated, IAuthResponse} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  public sendMessage = new EventEmitter<string>();
  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://localhost:8000/api/task_lists/', {});
  }

  getTaskListDetail(id: number): Promise<ITaskList> {
    return this.get(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  getTaskListTasks(id: number): Promise<ITaskC[]> {
    return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {});
  }

  getTaskDetail(id: number): Promise<ITaskD> {
    return this.get(`http://localhost:8000/api/tasks/${id}/`, {});
  }

  createTaskList(name: any): Promise<ITaskList> {
    return this.post('http://localhost:8000/api/task_lists/', {
      name: name
    });
  }

  updateTaskList(taskList: ITaskList): Promise<ITaskList> {
    return this.put(`http://localhost:8000/api/task_lists/${taskList.id}/`, {
      name: taskList.name
    });
  }

  deleteTaskList(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  createTask(taskListId: number, name: string, due_on: any, status: string): Promise<ITaskCreated> {
    return this.post(`http://localhost:8000/api/task_lists/${taskListId}/tasks/`, {
      name: name,
      due_on: due_on,
      status: status
    });
  }

  updateTask(task: any): Promise<ITaskD> {
    return this.put(`http://localhost:8000/api/tasks/${task.id}/`, {
      name: task.name,
      due_on: task.due_on,
      status: task.status
    });
  }

  deleteTask(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/tasks/${id}/`, {});
  }

  auth(login: any, password: any) : Promise <IAuthResponse>{
    return this.post('http://localhost:8000/auth/login/',{
      username : login,
      password : password
    })
  }

  logout() : Promise<any>{
    return this.post('http://localhost:8000/auth/logout/',{

    })
  }





}
