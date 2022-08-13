import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'miSetDiffTimeProfile'
})
export class MiSetDiffTimeProfilePipe implements PipeTransform {

    transform(_date: string): string {
        const date = new Date(_date);
        const now = new Date();

        const result_month = now.getMonth() - date.getMonth() + 12 * (now.getFullYear() - date.getFullYear());
        if (result_month == 0) {
            let diff_days =(date.getTime() - now.getTime()) / 1000;
            diff_days /= (60 * 60 * 24);
            const result_days =  Math.abs(Math.round(diff_days));

            if (result_days <= 0) {
                if (date < now) {
                    let diff_hours =(date.getTime() - now.getTime()) / 1000;
                    diff_hours /= (60 * 60);
                    const result_hours =  Math.abs(Math.round(diff_hours));
                    if (result_hours == 0) {
                        let diff_minutes =(now.getTime() - date.getTime()) / 1000;
                        diff_minutes /= 60;

                        const result_minutes = parseInt(Math.abs(Math.round(diff_minutes)).toFixed());
                        if (result_minutes > 60) {
                            return 'Invalid reported date';
                        }else{
                            if (result_minutes == 0) {
                                return 'Just now';
                            };
                            return `${result_minutes} minutes ago`;
                        };
                    }else{
                        return `${result_hours} hours ago`;
                    };
                }else{
                    const result_seconds = (date.getTime() - now.getTime()) / 1000;
                    if (result_seconds >= 0) {
                        return `${result_seconds.toFixed()} seconds ago`;
                    }else{
                        return 'Invalid reported date';
                    };
                };
            };

            return `${result_days} days ago`;
        };

        if (result_month < 0) {
            return 'Invalid reported date';
        }else{
            if (result_month >= 12) {
                if (date < now) {
                    let diff_years =(date.getTime() - now.getTime()) / 1000;
                    diff_years /= (60 * 60 * 24);
                    const result_years =  Math.abs(Math.round(diff_years/365.25));
                    return `${result_years} years ago`;
                }else{
                    return 'Invalid reported date';
                };
            };
            return `${result_month} months ago`;
        };
    }

}
