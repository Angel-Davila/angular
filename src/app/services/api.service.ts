import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public sample: String = "Text Sample";
  public menus = [
    {
      "id": 1,
      "name": "users"
    },

    {
      "id2": 2,
        "name": "customers"
    },
    
    {
      "id2": 3,
        "name": "personnel"
    }  
  ];

  getUsers(){
    return this.menus;
  };





}
