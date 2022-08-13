import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule
    ]
})
export class PagesModule { }
