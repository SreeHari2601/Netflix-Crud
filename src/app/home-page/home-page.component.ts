import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
   // to hold movieList 

    movieList:any=[]

    // to hold search term 
    searchTerm=""

  constructor( private router:Router,private api :ApiService) { }

  ngOnInit(): void {
    this.api.getAllMovieList().subscribe((result)=>{
      this.movieList=result
      console.log(this.movieList);
      
      
    })
    // to get search term from api service

    this.api.search.subscribe((data)=>{
      console.log(data);
      this.searchTerm=data
      
    })
  }

 

}
