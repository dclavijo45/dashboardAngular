import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { MoreInformationComponent } from './more-information/more-information.component';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        AsideMenuComponent,
        MainContentComponent,
        MoreInformationComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        NgChartsModule
    ],
    exports: [
        AsideMenuComponent,
        MainContentComponent,
        MoreInformationComponent
    ]
})
export class ComponentsModule { }
