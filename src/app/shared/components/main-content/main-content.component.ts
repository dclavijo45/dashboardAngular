import { Component, OnInit } from '@angular/core';

import { IBadge } from '../../interfaces/badge';
import { IOrder } from '../../interfaces/order';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    badges: IBadge[];
    orders: IOrder[];

    constructor() {
        this.badges = [
            {
                icon: 'local_atm',
                percent: 70,
                title: 'Sales',
                price: 46700,
                date: '06-05-2022',
                color: 'violet'
            },
            {
                icon: 'point_of_sale',
                percent: 80,
                title: 'Revenue',
                price: 28300,
                date: '07-05-2022',
                color: 'red-light'
            },
            {
                icon: 'assignment',
                percent: 60,
                title: 'Expenses',
                price: 12300,
                date: '08-05-2022',
                color: 'orange-light'
            }
        ];

        this.orders = [
            {
                product: 'Product 1',
                tracking_id: '#123456789',
                date: '06-05-2022',
                status: 0
            },
            {
                product: 'Product 2',
                tracking_id: '#234235663',
                date: '07-05-2022',
                status: 1
            },
            {
                product: 'Product 3',
                tracking_id: '#961235512',
                date: '08-05-2022',
                status: 0
            },
            {
                product: 'Product 4',
                tracking_id: '#567891234',
                date: '09-05-2022',
                status: 2
            },
        ];
    }

    ngOnInit(): void {
    }
}
