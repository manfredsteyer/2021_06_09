
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { AsyncCityPipe } from './async-city.pipe';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { CityValidatorDirective } from './city-validator.directive';
import { RoundTripDirective } from './round-trip.directive';
import { AsyncCityDirective } from './async-city.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CityPipe, 
        StatusColorPipe, 
        StatusFilterPipe, 
        AsyncCityPipe, 
        ShowErrorsComponent, 
        CityValidatorDirective, RoundTripDirective, AsyncCityDirective
    ],
    providers: [],
    exports: [
        CityPipe, 
        StatusColorPipe, 
        StatusFilterPipe, 
        AsyncCityPipe,
        ShowErrorsComponent,
        CityValidatorDirective,
        RoundTripDirective,
        AsyncCityDirective
    ],
})
export class SharedModule { }
