import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import {IAuthResponse, IContact} from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  constructor(http: HttpClient) {
    super(http);
  }

  getContacts(): Promise<IContact[]> {
    return this.get('http://127.0.0.1:8000/api/contacts', {});
  }
  getContactDetailed(id: number): Promise<IContact> {
    return this.get(`http://127.0.0.1:8000/api/contacts/${id}/`, {});
  }

  updateContact(contact: IContact): Promise<IContact> {
    return this.put(`http://127.0.0.1:8000/api/contacts/${contact.id}/`, {
      name: contact.name
    });
  }

  deleteContact(id: number): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/contacts/${id}/`, {});
  }

  createContact(contact:any,id:number){
    return this.post(`http://127.0.0.1:8000/api/contacts/${id}/`,{
      name:contact.name,
      phone:contact.phone,
    });
  }

  auth(login: string, password: string): Promise<IAuthResponse> {
    return this.post('http://127.0.0.1:8000/api/login/', {
      username: login,
      password: password
    });
  }

  logout(): Promise<any> {
    return this.post('http://127.0.0.1:8000/api/logout/', {});
  }


}
