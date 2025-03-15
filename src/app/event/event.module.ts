import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ListEventComponent } from './list-event/list-event.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { NewEventComponent } from './new-event/new-event.component';
import { FormEventComponent } from './form-event/form-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: '',
        component: ListEventComponent,
      },
      {
        path: 'new',
        component: NewEventComponent,
      },
      {
        path: 'edit/:id',
        component: EditEventComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    EventComponent,
    ListEventComponent,
    NewEventComponent,
    FormEventComponent,
    EditEventComponent,
    DetailEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatLabel,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  exports: [EventComponent],
})
export class EventModule {}
