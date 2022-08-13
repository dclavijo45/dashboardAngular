import { Component } from '@angular/core';
import { IMenuOption } from '../../interfaces/menu-option';

@Component({
    selector: 'app-aside-menu',
    templateUrl: './aside-menu.component.html',
    styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent {

    menu_options: IMenuOption[];

    constructor() {
        this.menu_options = [
            {
                title: 'Dashboard',
                icon: 'home',
                active: true
            },
            {
                title: 'Others',
                icon: 'assignment',
                active: false
            },
            {
                title: 'Customers',
                icon: 'group',
                active: false
            },
            {
                title: 'Products',
                icon: 'inventory_2',
                active: false
            },
            {
                title: 'Analytics',
                icon: 'analytics',
                active: false
            }
        ]
    }

    setMenuOption(menuOption: IMenuOption): void {
        this.menu_options = this.menu_options.map(menu_option => {
            menu_option.active = false;
            return menu_option;
        });

        menuOption.active = true;
    }

}
