import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-update-itemm',
  templateUrl: './update-itemm.component.html',
  styleUrls: ['./update-itemm.component.css']
})
export class UpdateItemmComponent implements OnInit {
   movId:any
   movieDetails:any ={

   }
  constructor(private activatedroute:ActivatedRoute,private api :ApiService,private router :Router) { }

  ngOnInit(): void {

    // get movie id to be updated
    this.activatedroute.params.subscribe((result)=>{
      this.movId =result['id']
      // console.log(this.movId);
      
    }) 

    // fetch movie details of current  id as .. 
     this.api.viewMovie(this.movId).subscribe((result)=>{
      this.movieDetails=result
      // console.log(this.movieDetails);
      
     })
  }

  UpdateMovie(form:any) {
    console.log(form.value);
    let updatemov = form.value
    this.api.update(this.movId,updatemov).subscribe((data)=>{
      alert("Movie Details are updated succesfully..")
      this.router.navigateByUrl("")
    })
    
  }

}
