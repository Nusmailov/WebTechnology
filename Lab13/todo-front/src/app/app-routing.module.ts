import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {TaskListsComponent} from './task-lists/task-lists.component';
import {TaskListAboutComponent} from './task-list-about/task-list-about.component';
import {TasksReturningComponent} from './tasks-returning/tasks-returning.component';
import {TaskAboutComponent} from './task-about/task-about.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'task_lists', component: TaskListsComponent},
  {path: 'task_lists/:id', component: TaskListAboutComponent},
  {path: 'task_lists/:id/tasks', component: TasksReturningComponent},
  {path: 'tasks/:id', component: TaskAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
