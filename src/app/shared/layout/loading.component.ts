import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'tonomony-ng-core-lib';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading: boolean;
  progress: number;

  constructor(private loading: LoadingService) {
  }

  ngOnInit() {
    this.loading.isLoadingGlobally$.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );

    this.loading.currentProgress$("home").subscribe(
      (progress) => { 
        this.progress = progress; 
      }
    );
  }

}
