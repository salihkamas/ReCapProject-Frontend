import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  user: User = {
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  isLogIn() {
    return this.authService.isAuthenticated();
  }
  getUser() {
    return this.localStorageService.getItem('user');
  }
  logout(){
    this.authService.logout();
    window.location.reload();
  }
}
