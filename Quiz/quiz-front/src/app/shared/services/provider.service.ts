import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IPost, IAuthResponse} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  constructor(http: HttpClient) {
    super(http);
  }

  getPosts(): Promise<IPost[]> {
    return this.get('http://127.0.0.1:8000/api/posts', {});
  }
  getPostDetailed(id:number): Promise<IPost>{
    return this.get(`http://127.0.0.1:8000/api/posts/${id}/`,{})
  }

  updatePost(post: IPost): Promise<IPost> {
    return this.put(`http://localhost:8000/api/posts/${post.id}/`, {
      title: post.title,
    });
  }

  deletePost(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/posts/${id}/`, {});
  }

  createTaskList(title: any, body: any): Promise<IPost> {
    return this.post('http://127.0.0.1:8000/api/taskList', {
      title: title,
      body: body,
    });
  }
  auth(login: string, password: string): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }
  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {});
  }

  createPost(post:any,id:number){
    return this.post(`http://127.0.0.1:8000/api/posts/${id}/`,{
      title:post.title,
      body:post.body,
      created_at:post.created_at,
      created_by:post.created_by,
      like_count:post.like_count,
    });
  }

}
