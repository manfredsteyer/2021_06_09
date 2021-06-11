import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DefaultFlightService, FlightService } from './flight.service';

fdescribe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DefaultFlightService]
    });
    service = TestBed.inject(DefaultFlightService);
  });

  it('should be created', () => {

    service.find('Graz', 'Hamburg').subscribe(
      flights => {
        expect(flights.length).toBe(1);
      }
    );

    const ctrl = TestBed.inject(HttpTestingController);
    const req = ctrl.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');
    req.flush([{id: 7}]);

  });
});
