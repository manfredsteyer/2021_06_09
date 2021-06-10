import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})
export class StatusToggleComponent implements OnInit {

  @Input() status = false;
  @Output() statusChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.status = !this.status;
    this.statusChange.next(this.status);
  }

}
