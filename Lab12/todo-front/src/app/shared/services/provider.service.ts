import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {ITask, ITaskDetailed, ITaskList} from '../../shared/models/models'

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService  extends MainService{

  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://127.0.0.1:8000/api/tasks', {});
  }
  getTasksOfTaskList(id:number): Promise<ITask[]>{
      return this.get(`http://127.0.0.1:8000/api/tasks_list/${id}/list`,{})
  }
  getTaskDetailed(id:number): Promise<ITaskDetailed>{
      return this.get(`http://127.0.0.1:8000/api/tasks/${id}`,{})
  }
}
