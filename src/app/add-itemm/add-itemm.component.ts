import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-add-itemm',
  templateUrl: './add-itemm.component.html',
  styleUrls: ['./add-itemm.component.css']
})
export class AddItemmComponent implements OnInit {

  constructor(private api :ApiService, private router :Router) { }
   
     id:any
     name:any
     match:any
     photograph:any
     category:any
     Descp:any


  ngOnInit(): void {
  }

addMovie() {
  // console.log(this.id);
  let newMovie = {
    id : this.id,
    name:this.name,
    match:this.match,
    photograph:this.photograph,
    category:this.category,
    Descp :this.Descp

  }
  console.log(newMovie);
  this.api.addMovie(newMovie).subscribe((result)=>{
    alert ("Movie added Successfully")
    this.router.navigateByUrl("")
  })
 
}


}
