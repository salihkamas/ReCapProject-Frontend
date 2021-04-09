import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  getUser() {
    return this.localStorageService.getItem('user');
  }
}
