import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IPost} from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  public posts:IPost[]=[];
  public isLogged = false;
  public login = '';
  public password = '';
  public postDetailed:any;
  public showPost = false;
  public postsID = 0;
  public title: any = ''

  public postCreate: IPost = {
    id: 0,
    title : "",
    body: "",
    created_at: "2014-04-03T04:33:16Z",
    created_by: "",
    like_count: 0,
  };

  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }

    // if (this.isLogged) {
      this.getPosts();
    // }

  }
  getPosts() {
    this.provider.getPosts().then(res => {
      this.posts = res
    });
  }
  getPostDetailed(task:IPost){
    this.provider.getPostDetailed(task.id).then(data=>{
        this.showPost = !this.showPost;
        this.postDetailed = data;
      }
    )
  }

  updatePost(c: IPost) {
    this.provider.updatePost(c).then(res => {
      console.log(c.title + ' updated');
    });
  }

  deletePost(c: IPost) {
    this.provider.deletePost(c.id).then(res => {
      console.log(c.title + ' deleted');
      this.provider.getPosts().then(r => {
        this.posts = r;
      });
    });
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        this.isLogged = true;
        this.getPosts();
      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      this.isLogged = false;
      localStorage.clear();
    });
  }

  createPost(){
    this.provider.createPost(this.postCreate, this.postsID).then(res => {
      this.posts.push(res);
      this.title = "";
    })
  }

}
