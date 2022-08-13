import { Pipe, PipeTransform } from '@angular/core';

import { IMenuOption } from '../interfaces/menu-option';

@Pipe({
    name: 'menuOptionsActive',
    pure: false
})
export class MenuOptionsActivePipe implements PipeTransform {

    transform(value: IMenuOption): string {
        return value.active ? 'menu-option-active' : '';
    }

}
