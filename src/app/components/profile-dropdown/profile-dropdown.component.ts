import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  standalone: false,
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css',
})
export class ProfileDropdownComponent {
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
