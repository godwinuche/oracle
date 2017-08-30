import { Pipe, PipeTransform } from '@angular/core';
import * as humanize from 'humanize';
/**
 * Generated class for the TimeAgoPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'timeAgo',
  
})
export class TimeAgoPipe implements PipeTransform {
  
  transform(date:string) {
    return humanize.relativeTime(date);
  }
}
