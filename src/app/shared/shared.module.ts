
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { AsyncCityPipe } from './async-city.pipe';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CityPipe, 
        StatusColorPipe, 
        StatusFilterPipe, 
        AsyncCityPipe, 
        ShowErrorsComponent
    ],
    providers: [],
    exports: [
        CityPipe, 
        StatusColorPipe, 
        StatusFilterPipe, 
        AsyncCityPipe,
        ShowErrorsComponent
    ],
})
export class SharedModule { }
