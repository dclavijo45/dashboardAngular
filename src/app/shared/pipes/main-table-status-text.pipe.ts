import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mainTableStatusText'
})
export class MainTableStatusTextPipe implements PipeTransform {

    transform(value: number): string {
        switch (value) {
            case 0:
                return 'Approved';
            case 1:
                return 'Pending';
            case 2:
                return 'Delivered';
            default:
                return 'Pending';
        };
    }

}
