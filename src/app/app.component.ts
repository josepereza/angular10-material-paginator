import { Component,OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {User } from './models/user';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paginacion';
  datos:User[]=[];
  page_size:number=5
  page_number:number=0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
    constructor(public apiService:ApiService){
         
  }

  ngOnInit(){
    this.apiService.getAll().subscribe(data=>{
      this.datos=data;

  })
}
pageEvent(e:PageEvent){
  this.page_size=e.pageSize;
  this.page_number=e.pageIndex  ;
}
}