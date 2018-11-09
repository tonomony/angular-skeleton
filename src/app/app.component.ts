import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public constructor(private titleService: Title ) { }

  title = 'tonomony-angular-skeleton';

  ngOnInit() {
    // todo: move title assignment to core-service
    // => takes care of changing all needed title changes (title, h1, nav...)
    this.titleService.setTitle(this.title);
  }
}
