import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppModel } from './core/models/app.model';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  app: AppModel;

  public constructor(private titleService: Title) {
    this.app = {
      title: 'tonomony-angular-skeleton',
      isLoading: true
    };
  }

  ngOnInit() {
    this.titleService.setTitle(this.app.title);
    this.app.isLoading = false;
  }
}
