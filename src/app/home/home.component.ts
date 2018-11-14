import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/services/app.service';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = "Here are some links to help you start";

  constructor(
    private app: AppService,
    private loading: LoadingService) {
  }

  ngOnInit() {

    this.app.setPageTitle(this.title);
    this.loading.startLoading("home");

    let i = 0;
    setInterval(() => {
      this.loading.setLoadingProgress("home", ++i);
    }, 10);

    setTimeout(() => {
      this.loading.stopLoading("home");
    }, 1000);
  }

}
