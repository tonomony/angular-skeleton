import { Component, OnInit } from '@angular/core';
import { AppService } from './core/services/app.service';
import { AppModel } from './core/models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  app : AppModel;

  ngOnInit() {
    
    this.app = {
      title: 'tonomony-angular-skeleton',
      isLoading: false
    }

    // todo: Auto update?
    this.appService.update(this.app);
    
    this.appService.model.subscribe(
      (appModel) => {
        this.app = appModel;
      }
    )
  }
}
