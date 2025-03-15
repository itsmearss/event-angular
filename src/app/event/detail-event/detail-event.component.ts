import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-event',
  standalone: false,
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css',
})
export class DetailEventComponent {
  event = {
    title: 'Tech Conference 2025',
    date: '12 Agustus 2025',
    location: 'Jakarta, Indonesia',
    description:
      'Bergabunglah dengan para profesional teknologi dalam konferensi terbesar tahun ini!',
    category: 'Teknologi',
    quota: '500 peserta',
  };
}
