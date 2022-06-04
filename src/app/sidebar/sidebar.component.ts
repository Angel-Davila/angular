import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuArray: any;
  public stringSidebar: String = ""; 
  constructor(
    public apiService: ApiService
  
  ) { 
      
  }

  ngOnInit(): void {
    this.stringSidebar = this.apiService.sample;
    this.menuArray = this.apiService.getUsers();
  }
  
}
