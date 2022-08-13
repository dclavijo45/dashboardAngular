import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mainTableStatus'
})
export class MainTableStatusPipe implements PipeTransform {

    transform(value: number): string {
        switch (value) {
            case 0:
                return 'table-status-approved';
            case 1:
                return 'table-status-pending';
            case 2:
                return 'table-status-delivered';
            default:
                return 'table-status-pending';
        };
    }
}
