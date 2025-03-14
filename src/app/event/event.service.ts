import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs';

export interface Event {
  id?: any;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  maxAttendees: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private _httpClient: HttpClient) {}

  eventBaru = 'Angular Meetup 2025';

  getEvents() {
    return this._httpClient.get<Event[]>('http://localhost:5241/api/Events');
  }

  getEvent(id: any) {
    return this._httpClient.get<Event>(
      `http://localhost:5241/api/Events/${id}`
    );
  }

  updateEvent(id: any, data: Event) {
    return this._httpClient.put<Event>(
      `http://localhost:5241/api/Events/${id}`,
      data
    );
  }

  createEvents(data: Event) {
    return this._httpClient.post<Event>(
      'http://localhost:5241/api/Events',
      data
    );
  }

  deleteEvent(id: any) {
    return this._httpClient.delete<Event>(
      `http://localhost:5241/api/Events/${id}`
    );
  }
}
