import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemmComponent } from './add-itemm/add-itemm.component';
import { DeleteItemmComponent } from './delete-itemm/delete-itemm.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateItemmComponent } from './update-itemm/update-itemm.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {
    path:"",component:HomePageComponent
  },
  {
    path:"add-item",component:AddItemmComponent
  },
  {
    path:"view-item/:id",component:ViewItemComponent
  },
  {
    path:"update-item/:id",component:UpdateItemmComponent
  },
  {
    path:"delete-item/:id",component:DeleteItemmComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
