import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: false,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() title!: string;
  @Input() date!: string;
  @Input() location!: string;
  @Input() image: string =
    'https://images.unsplash.com/photo-1741462434929-0ea63a52917c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
