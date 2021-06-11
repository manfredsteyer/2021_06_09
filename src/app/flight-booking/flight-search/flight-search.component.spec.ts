import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FlightBookingModule } from '../flight-booking.module';

import { FlightSearchComponent } from './flight-search.component';
import { DummyFlightService, FlightService } from './flight.service';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let flightService: FlightService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [FlightBookingModule, HttpClientModule],
      declarations: [ ],
      // Globale Provider: Root-Scope
      providers: [
        {
          provide: FlightService,
          useClass: DummyFlightService
        }
      ]
    }).
    // Override locale services!
    overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          {  
            provide: FlightService,
            useClass: DummyFlightService
          }
        ]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;

    flightService = fixture.debugElement.injector.get(FlightService);

    spyOn(flightService, 'find').and.callThrough();
    // spyOn(flightService, 'find').and.returnValue(of([]));
    // spyOn(flightService, 'find').and.throwError("Error!");


    // fixture.nativeElement.query('button').click();
    fixture.detectChanges();
  });

  it('should not have a selectedFlight initially', () => {
    expect(component.selectedFlight).toBeUndefined();
  });

  it('should search for flights when from and to are given', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();

    // flightService.find is called
    expect(flightService.find).toHaveBeenCalledWith('Hamburg', 'Graz');
    expect(component.flights.length).toBe(3);
  });

  it('should NOT search for flights when from and to are NOT given', () => {
    component.from = '';
    component.to = '';
    component.search();

    // flightService.find is not called
    expect(flightService.find).not.toHaveBeenCalledWith('Graz', 'Hamburg');
    expect(component.flights.length).toBe(0);
  });

});
