import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pagestring'
})

export class AppendPagePipe implements PipeTransform {
    transform(value: any): any {
        return value+"-Page";
    }
}