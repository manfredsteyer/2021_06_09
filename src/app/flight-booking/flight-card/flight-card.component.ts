import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../model/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('constructor', this.selected, this.item);
  }

  ngOnInit(): void {
    console.debug('ngOnInit', this.selected, this.item);

    // setTimeout(() => this.selectedChange.next(true), 0);


  }
  
  ngOnChanges(changes: SimpleChanges): void {


    if(changes['selected']) {
      console.debug('selected was changed');
    }

    console.debug('ngOnChanges', this.selected, this.item);
  }
  
  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.selected, this.item);
  }
  

  select(): void {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
