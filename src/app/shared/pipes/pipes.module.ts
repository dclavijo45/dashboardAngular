import { CommonModule } from '@angular/common';
import { MainDrawCirclePipe } from './main-draw-circle.pipe';
import { MainTableStatusPipe } from './main-table-status.pipe';
import { MainTableStatusTextPipe } from './main-table-status-text.pipe';
import { MenuOptionsActivePipe } from './menu-options-active.pipe';
import { MiSetDiffTimeProfilePipe } from './mi-set-diff-time-profile.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        MenuOptionsActivePipe,
        MainTableStatusPipe,
        MainTableStatusTextPipe,
        MainDrawCirclePipe,
        MiSetDiffTimeProfilePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MenuOptionsActivePipe,
        MainTableStatusPipe,
        MainTableStatusTextPipe,
        MainDrawCirclePipe,
        MiSetDiffTimeProfilePipe
    ]
})
export class PipesModule { }
