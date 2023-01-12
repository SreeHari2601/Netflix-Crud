import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  search = new BehaviorSubject("")
  

  constructor(private api :HttpClient) { }


  // to get all movie list

  getAllMovieList() {
    //call api : http://localhost:3000/movies
   return this.api.get("http://localhost:3000/movies")
  }

  // to get a single movie details 

  viewMovie(movId:any) {
   // using restid call api http://localhost:3000/movies/movId

   return this.api.get("http://localhost:3000/movies/"+movId)

  }

  // to add new Movie 

  addMovie(newMovie:any) {
   return this.api.post("http://localhost:3000/movies/",newMovie)
  }

  // to update particulur movie 

  update(movId:any,UmovBody:any) {
    return this.api.put("http://localhost:3000/movies/"+movId,UmovBody)
  }

  // to delete a particulur movie

  deleteMov(movId:any) {
    return this.api.delete("http://localhost:3000/movies/"+movId)
  }
   
}
