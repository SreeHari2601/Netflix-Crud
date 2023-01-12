import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

   movId:Number =0
   movieDetails:any=[]

  constructor(private api :ApiService , private activatedroute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((result)=>{
      this.movId =result['id']
      console.log(this.movId);
      
      
    })

    // call api to get single movie detail
    this.api.viewMovie(this.movId).subscribe((result)=>{
      this.movieDetails =result
      console.log(this.movieDetails);
      
    })
  }

}
