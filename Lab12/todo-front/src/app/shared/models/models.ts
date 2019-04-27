export interface ITask{
    id:number,
    name: string,
    status: string,
}

export interface ITaskDetailed{
    id:number,
    name:string,
    created_at?:string,
    due_on?:string,
    status?: string,
}

export interface ITaskList{
    id:number,
    name:string
}

export interface ITaskCreate{
  name:string,
  created_at:string,
  due_on:string,
  status:string
}
