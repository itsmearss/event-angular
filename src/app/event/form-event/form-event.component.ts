import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Event, EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-event',
  standalone: false,
  templateUrl: './form-event.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './form-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEventComponent implements OnInit {
  form: FormGroup | any;

  @Input() formType: string = 'create';
  @Input() dataEvent: Event = {
    id: 0,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    maxAttendees: 0,
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _eventService: EventService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      location: '',
      maxAttendees: '',
    });

    if (this.formType === 'edit') {
      const { id } = this._activatedRoute.snapshot.params;
      this._eventService.getEvent(id).subscribe((data) => {
        this.form.patchValue(data);
      });
    }
  }

  submitForm() {
    if (this.formType === 'create') {
      const data = {
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        startDate: this.form.get('startDate').value,
        endDate: this.form.get('endDate').value,
        location: this.form.get('location').value,
        maxAttendees: this.form.get('maxAttendees').value,
      };

      this._eventService.createEvents(data).subscribe((response) => {
        this._router.navigate(['/event']);
      });
    } else {
      const { id } = this._activatedRoute.snapshot.params;
      const data = {
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        startDate: this.form.get('startDate').value,
        endDate: this.form.get('endDate').value,
        location: this.form.get('location').value,
        maxAttendees: this.form.get('maxAttendees').value,
      };

      this._eventService.updateEvent(id, data).subscribe((response) => {
        this._router.navigate(['/event']);
      });
    }
  }
}
