import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-list-event',
  standalone: false,
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent implements OnInit {
  constructor(private _eventService: EventService) {}

  dataSource: Event[] = [];

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'startDate',
    'endDate',
    'location',
    'maxAttendees',
    'isActive',
    'option',
  ];
  ngOnInit(): void {
    this._eventService.getEvents().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  deleteEvent(id: any) {
    this._eventService.deleteEvent(id).subscribe(() => {
      this._eventService.getEvents().subscribe((data: any) => {
        this.dataSource = data;
      });
    });
  }
}
