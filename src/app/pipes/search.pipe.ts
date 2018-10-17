import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if(!value){
      return;
    }
    if(!args){
      return value;
    }else{
      args = args.toLocaleLowerCase();
    }


    return value.filter((user)=>{
      return JSON.stringify(user).toLocaleLowerCase().includes(args);
    });
  }

}
