import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 search ="Search Movies here"

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  Search(event:any){
   let searchKey =event.target.value
    this.api.search.next(searchKey)
  }
}
