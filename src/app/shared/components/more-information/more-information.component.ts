import { ChartConfiguration, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

import { IUpdate } from '../../interfaces/update';

@Component({
    selector: 'app-more-information',
    templateUrl: './more-information.component.html',
    styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {

    updates: IUpdate[];
    lineChartData: ChartConfiguration['data'];

  lineChartOptions: ChartConfiguration['options'] = {
      hover: {
            intersect: false
        },
        elements: {
            line: {
                tension: 0.5
            },
            point:{
                borderWidth: 0,
                radius: 4
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#fff',
                titleColor: '#000',
                bodyColor: '#000',
                footerColor : '#000',
                usePointStyle: false
            },
            legend: {
                display: false
           }
        }
  };

  lineChartType: ChartType = 'line';

    constructor() {
        this.updates = [
            {
                id: 1,
                img_profile: 'https://media.gettyimages.com/videos/icon-man-bye-figure-animation-character-2d-cartoon-animations-people-video-id1193526853?s=640x640',
                name: 'John Doe',
                transcription: 'has ordened Apple smart 2500mh battery.',
                reported_time: '2022-05-07 2:29:00 PM'
            },
            {
                id: 2,
                img_profile: 'https://media.gettyimages.com/videos/icon-man-bye-figure-animation-character-2d-cartoon-animations-people-video-id1193526853?s=640x640',
                name: 'John Doe 2',
                transcription: 'has ordened Apple smart 2500mh battery.',
                reported_time: '2022-05-07 12:00:00 PM'
            },
            {
                id: 3,
                img_profile: 'https://media.gettyimages.com/videos/icon-man-bye-figure-animation-character-2d-cartoon-animations-people-video-id1193526853?s=640x640',
                name: 'John Doe 3',
                transcription: 'has ordened Apple smart 2500mh battery.',
                reported_time: '2022-05-07 6:00:00 PM'
            }
        ];

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const gradient = ctx?.createLinearGradient(0, 120, 10, 0);
        gradient?.addColorStop(0, 'rgb(137 184 255 / 0.6)');
        gradient?.addColorStop(1, 'rgb(137 184 255 / 0%)');

        this.lineChartData = {
            datasets: [
                {
                    data: [0.5, 3, 1, 5, 2, 7, 6],
                    label: 'Series C',
                    backgroundColor: gradient,
                    borderColor: 'rgb(255, 163, 179)',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: 'rgb(0, 114, 255)',
                    pointHoverBorderColor: 'rgb(0, 114, 255)',
                    fill: 'start'
                }
            ],
            labels: ['', '02:00', '', '04:00', '', '06:00', ''],
        };
    }

    ngOnInit(): void {
    }

}
