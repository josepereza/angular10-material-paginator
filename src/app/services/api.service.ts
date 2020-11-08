import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  {User } from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  getAll(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos')
  }
}

