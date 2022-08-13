import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mainDrawCircle'
})
export class MainDrawCirclePipe implements PipeTransform {

    transform(value: number): string {
        return `rotate(${value / 100 * 180}deg)`;
    }
}
