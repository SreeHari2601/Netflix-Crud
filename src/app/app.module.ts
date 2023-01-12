import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { AddItemmComponent } from './add-itemm/add-itemm.component';
import { UpdateItemmComponent } from './update-itemm/update-itemm.component';
import { DeleteItemmComponent } from './delete-itemm/delete-itemm.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewItemComponent,
    AddItemmComponent,
    UpdateItemmComponent,
    DeleteItemmComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
