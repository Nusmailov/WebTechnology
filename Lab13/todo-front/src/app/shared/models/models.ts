export interface ITaskList {
  id: number;
  name: string;
}

export interface ITaskC {
  id: number;
  name: string;
  status: string;
}

export interface ITaskD {
  id: number;
  name: string;
  created_at: string;
  due_on: string;
  status: string;
}

export interface ITaskCreated {
  id: number;
  name: string;
  created_at: string;
  due_on: string;
  status: string;
  task_list: ITaskList;
}

export interface IAuthResponse {
  token: string;
}

