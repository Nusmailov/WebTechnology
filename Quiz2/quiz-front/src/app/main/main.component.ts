import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IContact, IContactCreate} from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  public contacts: IContact[] = [];
  public contactDetailed: any;

  public login = '';
  public password = '';
  public contactID = 0;
  public name: any = '';

  public contactCreate:IContactCreate = {
    name : "",
    phone: "",
  };
  public isLogged = false;


  ngOnInit() {
    this.getContacts()
  }

  getContacts() {
    this.provider.getContacts().then(res => {
      this.contacts = res;
    });
  }
  getContactDetailed(task: IContact) {
    this.provider.getContactDetailed(task.id).then(data => {
        // this.showPost = !this.showPost;
        this.contactDetailed = data;
      }
    );
  }

  updateContact(c: IContact) {
    this.provider.updateContact(c).then(res => {
      console.log(c.name + ' updated');
    });
  }

  deleteContact(c: IContact) {
    this.provider.deleteContact(c.id).then(res => {
      console.log(c.name + ' deleted');
      this.provider.getContacts().then(r => {
        this.contacts = r;
      });
    });
  }

  createContact(){
    this.provider.createContact(this.contactCreate, this.contactID).then(res => {
      this.contacts.push(res);
      this.name = "";
    })
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        this.isLogged = true;
        this.getContacts();
      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      this.isLogged = false;
      localStorage.clear();
    });
  }

}
