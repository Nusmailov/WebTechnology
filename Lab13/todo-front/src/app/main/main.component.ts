import { Component, OnInit } from '@angular/core';
import {ITaskList} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public logged = false;
  public login: any = '';
  public password: any = '';


  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
  }

  auth(){
    if(this.login !== '' && this.password !==''){
       this.provider.auth(this.login, this.password).then(res =>{
         localStorage.setItem('token', res.token);

         this.logged = true;
       });
    }
  }

  logout(){
    this.provider.logout().then(res =>{
      localStorage.clear();
      this.logged = false;
    })
  }



}
