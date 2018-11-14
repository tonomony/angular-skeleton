import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private app: AppService) { }

  ngOnInit() {
    this.app.settings$()
      .pipe(
        map(s => s.pageTitle),
        distinctUntilChanged())
      .subscribe(
        (pageTitle) => {
          this.title = pageTitle;
        }
      );
  }

}
