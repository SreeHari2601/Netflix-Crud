import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movieList: any[], filterString:String,propName:any): any[]  {
    const result:any=[]
    if (! movieList || filterString=="" || propName==""){
      return movieList
    }
    movieList.forEach((movie:any)=>{
      // console.log(movie[propName]);
      
    if ( movie[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
      result.push(movie)
      console.log(result);
      
    }
    })
    return result
  }

}
