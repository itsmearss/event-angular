import { Component } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  events: string = '';

  constructor(private eventService: EventService) {
    this.events = eventService.eventBaru;
  }
}
