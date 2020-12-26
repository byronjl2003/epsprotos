import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'grouppipe'
})
export class GroupPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {

        return Object.keys(value).map(function(key) {
            let pair = {};
            let k = 'key';
            let v = 'value';

            /* value['active'] = false;
            value['disable'] = false; */
            pair[k] = key;
            pair[v] = value[key];
            pair['active'] = false;
            pair['disable'] = false;
            console.log(value);
            console.log(pair);
            return pair;
        });
    }


}