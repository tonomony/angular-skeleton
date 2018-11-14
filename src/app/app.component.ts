import { Component, OnInit } from '@angular/core';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public app: AppService) {
  }

  ngOnInit() {
  }
}
