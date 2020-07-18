import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
