import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-delete-itemm',
  templateUrl: './delete-itemm.component.html',
  styleUrls: ['./delete-itemm.component.css']
})
export class DeleteItemmComponent implements OnInit {

   movId:any
  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe((result)=>{
    console.log(result['id']);
    this.movId=result['id']
  })

  this.api.deleteMov(this.movId).subscribe(()=>{
    alert("Movie has been removed !! ")
    this.route.navigateByUrl("")
  })

  }

}
