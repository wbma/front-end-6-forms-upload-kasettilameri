import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public mediaService: MediaService) {
  }

  ngOnInit() {
  }

}


<input [(ngModel)]="mediaService.username">
<br>
  <input [(ngModel)]="mediaService.password">
<br>
  <button (click)="mediaService.login()">Login</button>
